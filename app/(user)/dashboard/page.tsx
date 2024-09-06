import { ProjectList } from "@/components/project-list";
import { ProjectListSkeleton } from "@/components/project-list";
import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";

const DashboardPage = async () => {
  const { userId } = auth();
  if (!userId) {
    return null;
  }

  return (
    <div className="relative min-h-[calc(100vh-3.5rem)]">
      <h1 className="text-3xl font-bold text-center">Your projects</h1>
      <Suspense fallback={<ProjectListSkeleton />}>
        <ProjectList userId={userId} />
      </Suspense>
    </div>
  );
};

export default DashboardPage;
