import { ManageSubscriptions } from "@/components/manage-subscriptions";
import { PricingSection } from "@/components/pricing-section";
import { db } from "@/db";
import { cn } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const PaymentsPage = async () => {
  const { userId } = auth();
  if (!userId) {
    return redirect("/");
  }
  const subscription = await db.query.subscriptions.findFirst({
    where: (fields, { eq }) => eq(fields.userId, userId),
  });

  const plan = subscription?.subscribed ? "Premium" : "Free";

  return (
    <section className="min-h-[calc(100vh-3.5rem)] h-full space-y-3">
      <div
        className={cn(
          "p-4 border rounded-md",
          plan === "Premium"
            ? " bg-gradient-to-r from-yellow-500 to-orange-400"
            : "bg-secondary"
        )}
      >
        <h1 className="text-3xl font-extrabold mb-3">Subscription Details</h1>
        <p className="mb-2 text-lg">Current Plan: {plan}</p>
        {plan === "Premium" ? <ManageSubscriptions /> : null}
      </div>
      {plan === "Free" ? <PricingSection /> : null}
    </section>
  );
};

export default PaymentsPage;
