import Image from "next/image";

const Banner = ({ image }: { image: string }) => {
  return (
    <div className="h-64 w-full relative">
      <Image src={image} alt="Profile Banner" layout="fill" objectFit="cover" />
    </div>
  );
};

export default Banner;
