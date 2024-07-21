import dynamic from "next/dynamic";
import Image from "next/image";

export const LazyBanner = dynamic(() => import("./banner"), {
  ssr: false,
  loading: () => (
    <div className="h-64 w-full relative bg-muted">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/images/loader.svg"
          alt="Loader"
          width={64}
          height={64}
          className="animate-spin-slow"
        />
      </div>
    </div>
  ),
});
