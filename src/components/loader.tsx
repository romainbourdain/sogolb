import Image from "next/image";

const Loader = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Image
        src="/images/kiwi.svg"
        alt="Loader"
        width={64}
        height={64}
        className="animate-spin-slow"
      />
    </div>
  );
};

export default Loader;
