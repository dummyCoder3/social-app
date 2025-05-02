import { Skeleton } from "@/components/ui/skeleton";

export default function ProfileLoading() {
  return (
    <div className="min-h-screen bg-background p-6 flex flex-col items-center">
      {/* Profile Card */}
      <div className="w-full max-w-md border rounded-2xl p-6 flex flex-col items-center gap-4">
        <Skeleton className="h-24 w-24 rounded-full" />
        <Skeleton className="h-6 w-40 rounded-md" />
        <Skeleton className="h-4 w-48 rounded-md" />

        {/* Stats */}
        <div className="flex justify-between w-full px-10 mt-2">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-12" />
        </div>

        {/* Button */}
        <Skeleton className="h-10 w-32 rounded-md mt-4" />

        {/* Member since */}
        <Skeleton className="h-4 w-40 mt-2" />
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mt-8 w-full max-w-2xl">
        <Skeleton className="h-8 w-20 rounded-md" />
        <Skeleton className="h-8 w-20 rounded-md" />
      </div>

      {/* Posts Skeleton */}
      <div className="w-full max-w-2xl mt-4">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="border rounded-xl p-4 mt-4 flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div>
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-20 mt-1" />
              </div>
            </div>
            <Skeleton className="h-4 w-full mt-2" />
            <Skeleton className="h-4 w-3/4" />
            <div className="flex gap-4 mt-3">
              <Skeleton className="h-4 w-6 rounded-full" />
              <Skeleton className="h-4 w-6 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
