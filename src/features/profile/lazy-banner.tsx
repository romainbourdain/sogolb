import Loader from "@/components/loader";
import dynamic from "next/dynamic";

export const LazyBanner = dynamic(() => import("./banner"), {
  ssr: false,
  loading: () => (
    <div className="h-64 w-full relative bg-muted">
      <Loader />
    </div>
  ),
});
