import dynamic from "next/dynamic";
import ProfileEventsSkeleton from "./profile-events-skeleton";

export const LazyProfileEvents = dynamic(() => import("./profile-events"), {
  ssr: false,
  loading: () => <ProfileEventsSkeleton />,
});
