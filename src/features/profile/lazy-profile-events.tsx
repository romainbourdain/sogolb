import dynamic from "next/dynamic";
import ProfileEventsSkeleton from "./profile-events-skeleton";

export const LazyProfileEvents = dynamic(() => import("../history/infinite-events-scroller"), {
  ssr: false,
  loading: () => <ProfileEventsSkeleton />,
});
