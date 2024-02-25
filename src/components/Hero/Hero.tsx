import styles from '@/styles/Animation.module.css';
import Style from '@/styles/Text.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const buttons = [
    { title: 'Portfolio', target: '#Projects' },
    { title: 'Kontakt', target: '#Contact' },
];

export default function Hero() {
    return (
        <>
            <div className="overflow-hidden w-full px-8 md:min-h-screen min-h-0 md:mt-0 mt-32">
                <motion.div className="container mx-auto flex lg:flex-row flex-col items-center lg:items-start justify-between lg:mt-40">
                    <div className="flex flex-col items-center md:items-start">
                        <motion.h1
                            initial={{ opacity: 0, y: '25%' }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="leading-tight relative text-center md:text-start text-5xl md:text-6xl font-bold  "
                        >
                            <span className='before:absolute before:left-0 before:w-full before:content-["Jsem_Web_Designér"]'>
                                <span
                                    className={`${Style.AnimatedText} bg-gradient-to-r from-[#576CBC] to-purple-600 bg-clip-text text-transparent`}
                                >
                                    Jsem Web Designér
                                </span>
                            </span>
                            <br />
                            <span
                                className='before:absolute
            before:left-0 before:content-["a_Fullstack_developer"] before:w-full '
                            >
                                <span
                                    className={`${Style.AnimatedText2} bg-gradient-to-r from-purple-700 to-[#576CBC] dark:from-white  dark:to-[#576CBC] bg-clip-text text-transparent`}
                                >
                                    a Fullstack developer
                                </span>
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: '25%' }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="md:text-lg text-base dark:text-white text-black/70 font-semibold mt-3 mb-8 max-w-[80%] md:max-w-[60%] text-center md:text-start"
                        >
                            Proměním Váš web v moderní a přehlednou vizitku Vaši
                            společnosti nebo osoby.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: '25%' }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            viewport={{ once: true }}
                            className="flex justify-between relative"
                        >
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
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, rotateY: 180 }}
                        whileInView={{ rotateY: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        viewport={{ once: true }}
                        className={`${styles.animatedImg} !border-[4px] dark:border-white/90 border-black  w-auto h-auto md:w-[450px] md:h-[450px] relative   overflow-hidden my-16 lg:my-0 `}
                    >
                        <Image
                            src="/me.png"
                            className="h-full  w-full"
                            alt="Picture of me"
                            width={500}
                            height={500}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}
