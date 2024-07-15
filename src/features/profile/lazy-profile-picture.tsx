import dynamic from "next/dynamic";
import Image from "next/image";

export const LazyProfilePicture = dynamic(() => import("./profile-picture"), {
  ssr: false,
  loading: () => (
    <div className="h-36 w-36 relative size-36 rounded-full border-4 border-background bg-muted">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
