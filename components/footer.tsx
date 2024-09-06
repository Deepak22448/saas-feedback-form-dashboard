import { CopyrightIcon } from "lucide-react";
import { MaxWidthWrapper } from "./max-width-wrapper";

export const Footer = () => {
  return (
    <footer className="my-10 border-t bg-secondary">
      <MaxWidthWrapper className="flex justify-center items-center gap-x-4 py-3">
        <CopyrightIcon className="inline-block" />
        <span>2024 - All rights reserved</span>
      </MaxWidthWrapper>
    </footer>
  );
};
