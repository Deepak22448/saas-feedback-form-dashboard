import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

const ProductDetailsLoadingSkeleton = () => {
  return (
    <MaxWidthWrapper className="mt-4 space-y-8 min-h-screen">
      <div className="flex items-start justify-between gap-x-3">
        <div className="space-y-2 w-2/3">
          <Skeleton className="h-9 w-1/4" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-1/3" />
        </div>
        <div className="flex flex-col gap-3 w-1/3">
          <Skeleton className="h-9 w-32 ml-auto" />
          <Skeleton className="h-9 w-32 ml-auto" />
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
            {Array.from({ length: 5 }).map((feedback, idx) => (
              <TableRow key={idx}>
                {Array.from({ length: 4 }).map((_, idx) => (
                  <TableCell key={idx}>
                    <Skeleton className="h-8 w-full" />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </MaxWidthWrapper>
  );
};

export default ProductDetailsLoadingSkeleton;
