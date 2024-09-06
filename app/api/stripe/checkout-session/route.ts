import { db } from "@/db";
import { subscriptions } from "@/db/schema";
import { stripe } from "@/stripe/stripe";
import { auth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { plan, quantity = 1 } = await req.json();
  const { userId } = auth();

  if (!userId) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  const userSubscription = await db.query.subscriptions.findFirst({
    where: (fields, { eq }) => eq(fields.userId, userId),
  });

  try {
    const customerId = await getCustomerId(userId);
    if (!userSubscription) {
      await db.insert(subscriptions).values({
        userId,
        stripeCustomerId: customerId,
      });
    }

    const session = await stripe.checkout.sessions.create({
      success_url: `${req.nextUrl.origin}/payments`,
      customer: customerId,
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [{ price: plan, quantity }],
      billing_address_collection: "required",
    });

    return new Response(JSON.stringify({ sessionId: session.id }), {
      status: 200,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return new Response(
      JSON.stringify({ error: "Failed to create a session" }),
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
