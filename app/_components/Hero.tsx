import Image from "next/image";
import hero from "../../public/hero.gif";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src={hero}
        alt="hero"
        fill
        priority
        className="object-cover object-center"
      />
    </div>
  );
};

export default Hero;
