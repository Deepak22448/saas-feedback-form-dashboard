import { FC, PropsWithChildren } from "react";
import { CopyBtn } from "./copy-btn";

export const Code: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-primary p-5 rounded-md relative">
      <code className="text-white">{children}</code>
      <CopyBtn
        text={children?.toString()!}
        className="absolute right-2 top-2"
      />
    </div>
  );
};
