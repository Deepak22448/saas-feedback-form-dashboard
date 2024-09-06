"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Loader2Icon } from "lucide-react";
import { cn } from "@/lib/utils";

export const ManageSubscriptions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState<Error | null>(null);
  const redirectToCustomerPortal = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/stripe/create-portal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { url } = await res.json();
      router.push(url);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
    } finally {
      setIsLoading(false);
    }
  };
  const text = error ? error.message : "Modify Subscription";

  return (
    <Button
      onClick={redirectToCustomerPortal}
      disabled={isLoading}
      variant={error ? "destructive" : "default"}
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
