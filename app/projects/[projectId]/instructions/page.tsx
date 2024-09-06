import { Code } from "@/components/code";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { FC } from "react";

interface InstructionsPageProps {
  params: {
    projectId: string;
  };
}

const InstructionsPage: FC<InstructionsPageProps> = ({ params }) => {
  return (
    <MaxWidthWrapper className="mt-4">
      <h1 className="text-xl font-bold mb-1">Start Collecting Feedback</h1>
      <p className="text-lg text-secondary-foreground">
        Embed the code in our site
      </p>
      <Code>
        {`<feedback-form project-id="${params.projectId}"></feedback-form>`}
        <br />
        {`<script src="${process.env.FEEDBACK_FORM_URL}/feedback-form.umd.js"></script>`}
      </Code>
    </MaxWidthWrapper>
  );
};

export default InstructionsPage;
