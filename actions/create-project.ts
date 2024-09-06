"use server";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const createProject = async (formData: FormData) => {
  const { userId } = auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }

  formData.append("user_id", userId);
  const projectData = Object.fromEntries(
    formData.entries()
  ) as unknown as typeof projects.$inferInsert;

  const [newProject] = await db
    .insert(projects)
    .values(projectData)
    .returning({ id: projects.id });

  redirect(`/projects/${newProject.id}/instructions`);
};
