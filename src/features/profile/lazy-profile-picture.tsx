import Loader from "@/components/loader";
import dynamic from "next/dynamic";

export const LazyProfilePicture = dynamic(() => import("./profile-picture"), {
  ssr: false,
  loading: () => (
    <div className="h-36 w-36 relative size-36 rounded-full border-4 border-background bg-muted">
      <Loader />
    </div>
  ),
});
