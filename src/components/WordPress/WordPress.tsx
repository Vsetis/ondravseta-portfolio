import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
export default function WordPress() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "25%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        className="container md:my-32 mb-16 flex md:justify-between md:items-start items-center flex-col md:flex-row  mx-auto px-8"
      >
        <div className="md:mr-32">
          <h2 className=" text-2xl md:text-4xl font-bold mb-4 ">
            Vyhněte se WordPressu a podobným systémům!
          </h2>
          <div className="text-black/70 dark:text-white/80 ">
            <p className="mb-2">
              Jednou z největších nevýhod WordPressu a podobných systému je
              bezpečnost. <br />
              Tyto platformy jsou často terčem útoků hackerů, kteří se snaží
              získat neoprávněný <br />
              přístup k webovým stránkám a získat citlivé informace, jako jsou
              hesla, e-maily <br />
              nebo bankovní údaje.
            </p>
            <Link
              className="font-semibold dark:hover:text-white/80 transition-all duration-300 dark:text-white text-black hover:text-black/80"
              href="/WordPress"
            >
              Více..
            </Link>
          </div>
        </div>
        <div>
          <Image
            className="max-w-[350px] md:max-w-[500px] mt-16 md:mt-0"
            src="WP.svg"
            alt="WordPress"
            width={500}
            height={500}
          />
        </div>
      </motion.div>
    </>
  );
}
