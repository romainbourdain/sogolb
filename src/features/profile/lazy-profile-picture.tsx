import dynamic from "next/dynamic";
import Image from "next/image";

export const LazyProfilePicture = dynamic(() => import("./profile-picture"), {
  ssr: false,
  loading: () => (
    <div className="relative size-36 rounded-full border-4 border-background bg-muted">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/images/loader.svg"
          alt="Loader"
          width={36}
          height={36}
          className="animate-spin-slow"
        />
      </div>
    </div>
  ),
});
