"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  const btnText = pending ? "Creating Project" : "Create Project";

  return (
    <Button type="submit" disabled={pending}>
      <Loader2
        className={cn(
          "mr-2 h-4 w-4 animate-spin",
          pending ? "block" : "hidden"
        )}
      />

      {btnText}
    </Button>
  );
};
