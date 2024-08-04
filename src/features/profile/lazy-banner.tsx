import Loader from "@/components/loader";
import dynamic from "next/dynamic";

export const LazyBanner = dynamic(() => import("./banner"), {
  ssr: false,
  loading: () => (
    <div className="relative h-64 w-full bg-muted">
      <Loader />
    </div>
  ),
});
