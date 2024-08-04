import { Skeleton } from "@/components/ui/skeleton";

const ProfileEventsSkeleton = () => {
  return (
    <>
      <Skeleton className="h-40 w-full bg-border" />
      <div className="relative flex h-8 flex-row">
        <Skeleton className="absolute left-10 top-1/2 h-full w-[5px] -translate-x-1/2 -translate-y-1/2 bg-border" />
      </div>
      <div className="relative flex h-10 flex-row items-center justify-center">
        <Skeleton
          className="absolute left-10 top-1/2 flex aspect-square h-full
                      -translate-y-1/2 translate-x-[-50%] items-center justify-center
                      rounded-full bg-border"
        />
        <div className="flex h-10 w-full flex-row items-center justify-between gap-5 pl-[4.5rem]">
          <Skeleton className="h-5 w-96 bg-border" />
          <Skeleton className="h-5 w-20 rounded-full bg-border" />
        </div>
      </div>
      <div className="relative flex h-8 flex-row">
        <Skeleton className="absolute left-10 top-1/2 h-full w-[5px] -translate-x-1/2 -translate-y-1/2 bg-border" />
      </div>
      <Skeleton className="h-40 w-full  bg-border" />
    </>
  );
};

export default ProfileEventsSkeleton;
