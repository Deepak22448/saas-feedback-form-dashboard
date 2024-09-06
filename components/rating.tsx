import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import { FC } from "react";

interface RatingProps {
  rating: number;
}
export const Rating: FC<RatingProps> = ({ rating }) => {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon
          key={index}
          className={cn(
            "size-4",
            rating > index ? "fill-primary" : "fill-muted"
          )}
        />
      ))}
    </div>
  );
};
