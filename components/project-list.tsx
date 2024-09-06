import { db } from "@/db";
import { FC } from "react";
import { ProjectListItem, ProjectListItemSkeleton } from "./project-list-item";
import { SubscribeBtn } from "./subscribe-btn";
import { MAX_FREE_PROJECTS, Plans } from "@/stripe/payments";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { LockIcon } from "lucide-react";
import { getIsSubscribed } from "@/actions/user-subscriptions";
import { CreateProjectDialog } from "./create-project-dialog";

interface ProjectListProps {
  userId: string;
}

export const ProjectList: FC<ProjectListProps> = async ({ userId }) => {
  const [userProjects, isSubscribed] = await Promise.all([
    db.query.projects.findMany({
      where: (fields, { eq }) => eq(fields.user_id, userId),
    }),
    getIsSubscribed({ userId }),
  ]);

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5 auto-rows-max">
        {userProjects.map((project) => (
          <ProjectListItem project={project} key={project.id} />
        ))}

        {!isSubscribed ? (
          <li key="upgrate_to_premiumcard">
            <UpdateToPremiumCard />
          </li>
        ) : null}
      </ul>
      {!isSubscribed && userProjects.length < MAX_FREE_PROJECTS ? (
        <CreateProjectDialog />
      ) : null}
    </>
  );
};

const UpdateToPremiumCard = () => {
  return (
    <Card className="flex flex-col bg-gradient-to-r from-yellow-500 to-orange-400">
      <CardHeader className="flex-1">
        <CardTitle className="text-sm md:text-lg flex items-center">
          <LockIcon className="size-5 mr-2" />
          <span>Upgrade To Premium</span>
        </CardTitle>
        <CardDescription className="line-clamp-3 text-white">
          Get access to unlimited projects and premium features
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <SubscribeBtn plan="monthly" />
      </CardFooter>
    </Card>
  );
};
export const ProjectListSkeleton = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
      {Array.from({ length: 3 }).map((_, i) => (
        <ProjectListItemSkeleton key={i} />
      ))}
    </ul>
  );
};
