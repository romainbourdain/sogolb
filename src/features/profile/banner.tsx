import Image from "next/image";

const Banner = ({ image }: { image: string }) => {
  return (
    <div className="relative h-64 w-full">
      <Image src={image} alt="Profile Banner" layout="fill" objectFit="cover" />
    </div>
  );
};

export default Banner;
