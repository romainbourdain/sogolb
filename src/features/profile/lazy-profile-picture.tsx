import { Loader } from "@/components/ui/loader";
import dynamic from "next/dynamic";

export const LazyProfilePicture = dynamic(() => import("./profile-picture"), {
  ssr: false,
  loading: () => (
    <div className="relative size-36 rounded-full border-4 border-background bg-muted">
      <Loader
        variant="kiwi"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  ),
});
