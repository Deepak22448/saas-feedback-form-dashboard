import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

interface MaxWidthWrapperProps extends PropsWithChildren {
  className?: string;
}

export const MaxWidthWrapper: FC<MaxWidthWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "w-full max-w-screen-xl px-2.5 lg:px-20 relative mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};
