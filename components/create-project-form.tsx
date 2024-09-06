import { createProject } from "@/actions/create-project";
import { DialogFooter } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { SubmitButton } from "./submit-project-btn";

export const CreateProjectForm = () => {
  return (
    <form className="space-y-2" action={createProject}>
      <div className="grid sm:grid-cols-2 gap-x-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Project name"
            autoComplete="off"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="URL">URL</Label>
          <Input
            id="URL"
            name="URL"
            placeholder="https://example.com"
            autoComplete="off"
            required
          />
        </div>
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Description (optional)"
        />
      </div>
      <DialogFooter>
        <SubmitButton />
      </DialogFooter>
    </form>
  );
};
