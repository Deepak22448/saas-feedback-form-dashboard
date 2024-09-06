"use client";

import { FC, PropsWithChildren, useState } from "react";
import { Button, ButtonProps } from "./ui/button";
import { getStripe } from "@/stripe/stripe-client";
import { Loader2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Plans } from "@/stripe/payments";
import { useClerk } from "@clerk/nextjs";

interface SubscribeBtnProps extends PropsWithChildren {
  plan: keyof typeof Plans;
  className?: string;
  variant?: ButtonProps["variant"];
}

export const SubscribeBtn: FC<SubscribeBtnProps> = ({
  plan,
  children = "Subscribe",
  className,
  variant = "secondary",
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { user, openSignIn } = useClerk();
  const [error, setError] = useState<Error | null>(null);
  const handleCheckout = async () => {
    setIsLoading(true);
    if (!user) {
      setIsLoading(false);
      openSignIn();
      return;
    }
    try {
      const res = await fetch("/api/stripe/checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ plan: Plans[plan] }),
      });
      const { sessionId } = await res.json();
      const stripe = await getStripe();
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const text = error ? error.message : children;
  return (
    <Button
      onClick={handleCheckout}
      disabled={isLoading}
      variant={error ? "destructive" : variant}
      className={cn(className)}
    >
      <Loader2Icon
        className={cn(
          "size-4 mr-1 animate-spin",
          isLoading ? "block" : "hidden"
        )}
      />
      {text}
    </Button>
  );
};
