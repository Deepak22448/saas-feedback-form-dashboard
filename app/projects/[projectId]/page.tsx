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
    <MaxWidthWrapper className="mt-4 space-y-8 min-h-screen">
      <div className="flex items-start justify-between gap-x-5">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">{project.name}</h1>
          <h2 className="text-muted-foreground text-xl">
            {project.description}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            illo ut labore non nostrum eaque repudiandae odio quam soluta fugit.
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          <a
            href={project.URL}
            target="_blank"
            className={buttonVariants({
              variant: "outline",
            })}
          >
            <GlobeIcon className="mr-2 size-4" />
            Visit
          </a>
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
