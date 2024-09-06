import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreateProjectForm } from "./create-project-form";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";

export const CreateProjectDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="fixed right-3 bottom-5 group rounded-full shadow-lg shadow-neutral-600/80">
          <PlusIcon className="size-5" />
          <span className="w-0 opacity-0 group-hover:w-28 group-hover:opacity-100 transition-[opacity,width]">
            Create Project
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg rounded-md">
        <DialogHeader>
          <DialogTitle>New Project</DialogTitle>
          <DialogDescription>
            Create a new project to get started.
          </DialogDescription>
        </DialogHeader>
        <CreateProjectForm />
      </DialogContent>
    </Dialog>
  );
};
