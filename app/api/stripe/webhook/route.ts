import {
  cancelSubscription,
  createSubscription,
} from "@/actions/user-subscriptions";
import { stripe } from "@/stripe/stripe";
import Stripe from "stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature") as string;
  const webHookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

  if (!webHookSecret) {
    return new Response("Webhook secret not set", { status: 500 });
  }

  if (!sig) {
    return new Response("No signature", { status: 400 });
  }

  const event = stripe.webhooks.constructEvent(body, sig, webHookSecret);
  const { customer } = event.data.object as Stripe.Subscription;

  if (event.type === "customer.subscription.created") {
    await createSubscription({ stripeCustomerId: customer as string });
  } else if (event.type === "customer.subscription.deleted") {
    await cancelSubscription({ stripeCustomerId: customer as string });
  }

  return new Response(
    JSON.stringify({
      received: true,
    }),
    { status: 200 }
  );
}
