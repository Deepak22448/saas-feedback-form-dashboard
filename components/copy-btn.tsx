"use client";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import { FC, useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface CopyBtnProps {
  text: string;
  className?: string;
}
export const CopyBtn: FC<CopyBtnProps> = ({ text, className }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => setIssCopied(true));
  };
  const [isCopied, setIssCopied] = useState(false);
  const Icon = isCopied ? CheckIcon : ClipboardIcon;
  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIssCopied(false);
      }, 2000);
    }
  }, [isCopied]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Icon
            className={cn(
              "size-6 p-1 rounded-md hover:bg-slate-700 cursor-pointer z-10 text-primary-foreground",
              className
            )}
            onClick={copyToClipboard}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
