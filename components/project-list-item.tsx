import { projects } from "@/db/schema";
import { FC } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

interface ProjectListItemProps {
  project: typeof projects.$inferSelect;
}
export const ProjectListItem: FC<ProjectListItemProps> = ({ project }) => {
  return (
    <li>
      <Card className="flex flex-col h-full ">
        <CardHeader className="flex-1">
          <CardTitle>{project.name}</CardTitle>
          <CardDescription className="line-clamp-3">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto">
          <Link href={`/projects/${project.id}`} className={buttonVariants()}>
            View Project
          </Link>
        </CardFooter>
      </Card>
    </li>
  );
};

export const ProjectListItemSkeleton = () => {
  return (
    <li>
      <Card className="flex flex-col">
        <CardHeader className="flex-1">
          <Skeleton className="h-5 w-2/5" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-3/4" />
        </CardHeader>
        <CardFooter>
          <Skeleton className="h-8 w-24" />
        </CardFooter>
      </Card>
    </li>
  );
};
