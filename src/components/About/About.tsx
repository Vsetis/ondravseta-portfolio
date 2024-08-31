import {SiBabylondotjs, SiGraphql, SiNestjs, SiNodedotjs, SiTailwindcss} from 'react-icons/si';
import { TiCss3 } from 'react-icons/ti';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { FaReact, FaVuejs, FaFigma } from 'react-icons/fa';
import { SiTrpc } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
    { title: 'React', icon: FaReact, delay: 0 },
    { title: 'Vue', icon: FaVuejs, delay: 0.1 },
    { title: 'Node', icon: SiNodedotjs, delay: 0.2 },
    { title: 'tRPC', icon: SiTrpc, delay: 0.3 },
    {title: "NestJS", icon: SiNestjs, delay: 0.4},
    { title: 'GraphQL', icon: SiGraphql, delay: 0.5 },
    {title: 'BabylonJS', icon: SiBabylondotjs, delay: 0.6},
    { title: 'TailwindCSS', icon: SiTailwindcss, delay: 0.7 },
    { title: 'HTML', icon: AiOutlineHtml5, delay: 0.8 },
    { title: 'CSS', icon: TiCss3, delay: 0.9 },
    { title: 'Figma', icon: FaFigma, delay: 1 },
];

export default function About() {
    const age = new Date().getFullYear() - 2004;
    return (
        <>
            <div id="About" className="container mx-auto  px-8  py-[128px]">
                <div className="flex flex-col md:flex-row justify-between ">
                    <div className="md:mr-8 ">
                        <div>
                            <div className="flex flex-row items-center">
                                <div className="bg-zinc-700 dark:bg-white/30 w-4 h-0.5 mr-2" />
                                <h2 className="font-semibold text-xs text-zinc-700 dark:text-white/30 ">
                                    O MNĚ
                                </h2>
                            </div>
                            <h2 className="font-bold text-4xl mb-4 ">
                                Něco málo o mně
                            </h2>
                        </div>
                        <div className="text-md font-medium text-center md:text-start  text-black/70 dark:text-white/90 mb-4 max-w-md">
                            <p className="text-justify">
                                Jmenuji se Ondřej Všetička, je mi {age} let. Jsem
                                velký fanoušek technologií a každý den se učím
                                novým věcem. Věnuji se převážně vývoji, ale také
                                designu.
                            </p>
                            <p className="mt-2 text-justify">
                                Nemám rád zastaralé technologie, a proto weby
                                tvořím pomocí nejmodernějších technologií.
                                Osobně si myslím, že v každém oboru bychom měli
                                jít s dobou.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:items-end mt-8 md:mt-0">
                        <h2 className="text-end text-4xl font-bold">
                            Mé dovednosti
                        </h2>
                        <div className="md:w-[25%] w-[75%] h-[2px] bg-black dark:bg-white/90 mb-8" />
                        <div className="grid grid-cols-4 text-black/70 dark:text-white/80 gap-6">
                            {skills.map((skill, index) => (
                                <motion.div
                                    initial={{ opacity: 0, y: '20%' }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: skill.delay,
                                    }}
                                    viewport={{ amount: 0.5 }}
                                    className="flex flex-col items-center"
                                    key={index}
                                >
                                    <skill.icon className="md:w-8 md:h-8 w-5 h-5 mb-2" />
                                    <p className="text-center font-bold text-[10px]">
                                        {skill.title}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
