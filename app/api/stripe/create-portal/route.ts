import { db } from "@/db";
import { subscriptions } from "@/db/schema";
import { stripe } from "@/stripe/stripe";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  const { userId } = auth();

  if (!userId) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  const userSubscription = await db.query.subscriptions.findFirst({
    where: (fields, { eq }) => eq(fields.userId, userId),
  });
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL!;

  try {
    const customerId = await getCustomerId(userId);
    if (!userSubscription) {
      await db.insert(subscriptions).values({
        userId,
        stripeCustomerId: customerId,
      });
    }

    const { url } = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${baseURL}/payments`,
    });

    return new Response(JSON.stringify({ url }), {
      status: 200,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return new Response(
      JSON.stringify({ error: "Failed to create a portal" }),
      { status: 500 }
    );
  }
}

const getCustomerId = async (userId: string) => {
  const userSubscription = await db.query.subscriptions.findFirst({
    where: (fields, { eq }) => eq(fields.userId, userId),
  });
  if (!userSubscription) {
    return (
      await stripe.customers.create({
        metadata: { dbId: userId },
      })
    ).id;
  }

  return userSubscription?.stripeCustomerId;
};
