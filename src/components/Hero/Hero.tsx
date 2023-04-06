import styles from "@/styles/Animation.module.css";
import Style from "@/styles/Text.module.css";
import Link from "next/link";

const Hero = () => {
  const buttons = [
    { title: "Portfolio", target: "#Projects" },
    { title: "Kontakt", target: "#Contact" },
  ];
  return (
    <>
      <div className=" container mx-auto flex md:flex-row flex-col items-center md:items-start justify-between  md:py-40 pt-32">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="leading-tight relative  text-center md:text-start text-4xl md:text-6xl font-bold ">
            <span className='before:absolute  before:text-center before:content-["Jsem_Designér"] '>
              <span
                className={`${Style.AnimatedText} bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent`}
              >
                Jsem Designér
              </span>
            </span>
            <br />
            <span className='before:absolute  before:content-["a_Front-End_Developer"] '>
              <span
                className={`${Style.AnimatedText2} bg-gradient-to-r from-black to-sky-600 dark:from-white dark:to-sky-600 bg-clip-text text-transparent`}
              >
                a Front-End Developer
              </span>
            </span>
          </h1>
          <p className="md:text-lg text-base md:text-start text-center dark:text-white text-black/70 font-semibold mt-3 mb-8 md:max-w-[60%]">
            Proměním Váš web v moderní a přehlednou vizitku Vaši společnosti
            nebo osoby.
          </p>
          <div className="flex justify-between relative">
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
