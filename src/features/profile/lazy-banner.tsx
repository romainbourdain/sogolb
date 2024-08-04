import dynamic from "next/dynamic";
import Image from "next/image";

export const LazyBanner = dynamic(() => import("./banner"), {
  ssr: false,
  loading: () => (
    <div className="relative h-64 w-full bg-muted">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
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
