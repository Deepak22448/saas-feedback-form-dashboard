import { FC, PropsWithChildren } from "react";
import { CopyBtn } from "./copy-btn";

export const Code: FC<PropsWithChildren> = ({ children }) => {
  const codeLines = children?.toString().split("\n") || [];

  return (
    <div className="bg-primary p-5 rounded-md relative">
      <code className="text-white flex flex-col">
        {codeLines
          .filter((line) => !!line)
          .map((line, index) => (
            <span key={index}>{line.trim()}</span>
          ))}
      </code>
      <CopyBtn
        text={children?.toString()!}
        className="absolute right-2 top-2"
      />
    </div>
  );
};
