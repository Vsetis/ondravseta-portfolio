import styles from "@/styles/Animation.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className=" container mx-auto flex md:flex-row flex-col items-center md:items-start justify-between md:py-[128px]  py-28">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-row items-center md:justify-start justify-center">
            <div className="bg-indigo-500 w-8 h-0.5 mr-2" />
            <h2 className="font-semibold text-xs text-indigo-500">HOME</h2>
            <div className="bg-indigo-500 w-8 h-0.5 ml-2 md:hidden" />
          </div>
          <h1 className="text-6xl mb-14 text-center md:text-start leading-[1.3] font-bold ">
            Jsem Designér <br />a Front-end Developer
          </h1>
          <p className="text-xl md:text-start text-center text-black/70 font-semibold mb-12">
            Dobrý den, jmenuji se Ondřej Všetička. A vytvořím Vám kvalitní a
            <br />
            moderní webové stránky.
          </p>
          <Link
            className="px-12 py-4 bg-indigo-500 text-xl  font-semibold text-white rounded-full"
            href="#Projects"
            scroll={false}
          >
            Projekty
          </Link>
        </div>
        <div
          className={`${styles.animatedImg} !border-[8px] border-black bg-black w-[450px] h-[450px] relative   overflow-hidden my-16 md:my-0`}
        >
          <img
            src="/landing-profile.jpg"
            className="h-full absolute top-[-64px] w-full"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
