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
    <MaxWidthWrapper className="mt-4 min-h-screen">
      <h1 className="text-xl font-bold mb-1">Start Collecting Feedback</h1>
      <p className="text-lg text-secondary-foreground">
        Embed the code in our site
      </p>
      <Code>
        {`
          <feedback-form project-id="${params.projectId}"></feedback-form>\n
          <script src="${process.env.NEXT_PUBLIC_FEEDBACK_FORM_URL}/feedback-form.umd.js"></script>
        `}
      </Code>
    </MaxWidthWrapper>
  );
};

export default InstructionsPage;
