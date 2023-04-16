import styles from "@/styles/Animation.module.css";
import Style from "@/styles/Text.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
const Hero = () => {
  const buttons = [
    { title: "Portfolio", target: "#Projects" },
    { title: "Kontakt", target: "#Contact" },
  ];
  return (
    <>
      <div className="overflow-hidden w-full px-8 ">
        <motion.div
          initial={{ opacity: 0, y: "25%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="container mx-auto flex lg:flex-row flex-col items-center lg:items-start justify-between  md:py-40 pt-32"
        >
          <div className="flex flex-col items-end md:items-start">
            <h1 className="leading-tight relative md:text-start text-5xl md:text-6xl font-bold  ">
              <span className='before:absolute  before:content-["Jsem_Designér"] '>
                <span
                  className={`${Style.AnimatedText} bg-gradient-to-r from-[#576CBC] to-purple-600 bg-clip-text text-transparent`}
                >
                  Jsem Designér
                </span>
              </span>
              <br />
              <span
                className='before:absolute 
            before:left-0 before:content-["a_Front-End_Developer"]  '
              >
                <span
                  className={`${Style.AnimatedText2} bg-gradient-to-r from-purple-700 to-[#576CBC] dark:from-white dark:to-[#576CBC] bg-clip-text text-transparent`}
                >
                  a Front-End Developer
                </span>
              </span>
            </h1>
            <p className="md:text-lg text-base dark:text-white text-black/70 font-semibold mt-3 mb-8 md:max-w-[60%]">
              Proměním Váš web v moderní a přehlednou vizitku Vaši společnosti
              nebo osoby.
            </p>
            <div className="flex justify-between relative">
              {buttons.map((button) => (
                <Link
                  className="md:mr-4 ml-4 md:ml-0 px-8 py-2 rounded-full bg-[#576CBC]/90 text-white last:bg-black/80 dark:last:bg-white/80 dark:text-black hover:bg-[#576CBC] dark:hover:bg-[#576CBC]/70 transition-all duration-300 last:hover:bg-black last:dark:hover:bg-white/60"
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
            className={`${styles.animatedImg} !border-[4px] dark:border-white/90 border-black  w-auto h-auto md:w-[450px] md:h-[450px] relative   overflow-hidden my-16 lg:my-0 `}
          >
            <Image
              src="/me.png"
              className="h-full  w-full"
              alt="Picture of me"
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
