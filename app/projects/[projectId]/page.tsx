import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { db } from "@/db";
import { CodeIcon, GlobeIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Rating } from "@/components/rating";

interface ProjectDetailsPageProps {
  params: {
    projectId: string;
  };
}

const ProjectDetailsPage: FC<ProjectDetailsPageProps> = async ({ params }) => {
  const project = await db.query.projects.findFirst({
    where: (fields, { eq }) => eq(fields.id, parseInt(params.projectId)),
    with: {
      feedbacks: true,
    },
  });
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <MaxWidthWrapper className="mt-4 space-y-8">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">{project.name}</h1>
          <h2 className="text-muted-foreground text-xl">
            {project.description}
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            href={project.URL}
            className={buttonVariants({
              variant: "outline",
            })}
          >
            <GlobeIcon className="mr-2 size-4" />
            Visit
          </Link>
          <Link
            href={`/projects/${project.id}/instructions`}
            className={buttonVariants({ variant: "secondary" })}
          >
            <CodeIcon className="mr-2 size-4" />
            Embed Code
          </Link>
        </div>
      </div>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Rating</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {project.feedbacks.map((feedback) => (
              <TableRow key={feedback.id}>
                <TableCell>{feedback.userName}</TableCell>
                <TableCell>{feedback.userEmail}</TableCell>
                <TableCell>{feedback.message}</TableCell>
                <TableCell>
                  <Rating rating={feedback.rating} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </MaxWidthWrapper>
  );
};

export default ProjectDetailsPage;
