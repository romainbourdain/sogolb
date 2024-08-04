import { Skeleton } from "@/components/ui/skeleton";

const ProfileEventsSkeleton = () => {
  return (
    <>
      <Skeleton className="w-full h-40 bg-border" />
      <div className="relative flex flex-row h-8">
        <Skeleton className="w-[5px] h-full bg-border absolute top-1/2 left-10 transform -translate-y-1/2 -translate-x-1/2" />
      </div>
      <div className="flex flex-row justify-center items-center h-10 relative">
        <Skeleton
          className="absolute top-1/2 left-10 transform -translate-y-1/2 translate-x-[-50%]
                      h-full aspect-square bg-border rounded-full
                      flex justify-center items-center"
        />
        <div className="w-full flex flex-row justify-between items-center h-10 gap-5 pl-[4.5rem]">
          <Skeleton className="h-5 bg-border w-96" />
          <Skeleton className="h-5 bg-border w-20 rounded-full" />
        </div>
      </div>
      <div className="relative flex flex-row h-8">
        <Skeleton className="w-[5px] h-full bg-border absolute top-1/2 left-10 transform -translate-y-1/2 -translate-x-1/2" />
      </div>
      <Skeleton className="w-full h-40  bg-border" />
    </>
  );
};

export default ProfileEventsSkeleton;
