import styles from "@/styles/Animation.module.css";
import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  const buttons = [
    { title: "Portfolio", target: "#Projects" },
    { title: "Kontakt", target: "#Contact" },
  ];
  return (
    <>
      <div className=" container mx-auto flex md:flex-row flex-col items-center md:items-start justify-between  md:py-40 pt-32">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-row items-center md:justify-start justify-center">
            <div className="bg-indigo-500 w-8 h-0.5 mr-2" />
            <h2 className="font-semibold text-xs text-indigo-500">HOME</h2>
            <div className="bg-indigo-500 w-8 h-0.5 ml-2 md:hidden" />
          </div>
          <h1 className="md:text-6xl text-4xl mb-14 text-center md:text-start leading-[1.3] font-bold text-transparent bg-gradient-to-r from-indigo-500 to-black bg-clip-text dark:to-white">
            Jsem Designér <br />a Front-end Developer
          </h1>
          <p className="md:text-lg text-md md:text-start text-center dark:text-white text-black/70 font-semibold mb-12">
            Dobrý den, jmenuji se Ondřej Všetička. Jsem Webový designér a
            Front-end developer
          </p>
          <div className="flex justify-between">
            {buttons.map((button) => (
              <Link
                className="md:mr-4 ml-4 md:ml-0 px-8 py-2 rounded-full bg-indigo-500 text-white last:bg-black dark:last:bg-white/80 dark:text-black"
                key={button.target}
                href={button.target}
                scroll={false}
              >
                {button.title}
              </Link>
            ))}
          </div>
        </div>
        <div
          className={`${styles.animatedImg} !border-[4px] dark:border-white/90 border-black bg-black w-[350px] h-[350px] md:w-[450px] md:h-[450px] relative   overflow-hidden my-16 md:my-0 `}
        >
          <img src="/me.jpg" className="h-full  w-full" alt="Ondrej_Vseticka" />
        </div>
      </div>
    </>
  );
};

export default Hero;
