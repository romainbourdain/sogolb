"use client";
import Image from "next/image";
import { useState } from "react";

const Banner = ({ image }: { image: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="h-64 w-full relative">
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/loader.svg"
            alt="Loader"
            width={64}
            height={64}
            className="animate-spin-slow"
          />
        </div>
      )}
      <Image
        src={image}
        alt="Profile Banner"
        layout="fill"
        objectFit="cover"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default Banner;
