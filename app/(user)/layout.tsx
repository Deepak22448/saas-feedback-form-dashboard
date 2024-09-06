import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { FC, PropsWithChildren } from "react";

const UserLayout: FC<PropsWithChildren> = ({ children }) => {
  return <MaxWidthWrapper className="py-5">{children}</MaxWidthWrapper>;
};

export default UserLayout;
