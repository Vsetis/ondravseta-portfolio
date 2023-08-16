import { DiReact } from 'react-icons/di';
import { SiNuxtdotjs, SiTailwindcss } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { AiFillHtml5 } from 'react-icons/ai';
import { TbBrandNextjs } from 'react-icons/tb';
import { motion } from 'framer-motion';
export default function About() {
    const skills = [
        { title: 'NextJS', icon: TbBrandNextjs },
        { title: 'NuxtJS', icon: SiNuxtdotjs },
        { title: 'TailwindCSS', icon: SiTailwindcss },
        { title: 'HTML', icon: AiFillHtml5 },
        { title: 'MySQL', icon: GrMysql },
    ];
    return (
        <>
            <motion.div
                id="About"
                className="container mx-auto  px-8 md:px-0 py-[128px]"
            >
                <motion.div
                    initial={{ opacity: 0, y: '50%' }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col"
                >
                    <div className="flex flex-row items-center md:justify-start justify-center">
                        <div className="bg-zinc-700 dark:bg-white/30 w-4 h-0.5 mr-2" />
                        <h2 className="font-semibold text-xs text-zinc-700 dark:text-white/30 ">
                            O MNĚ
                        </h2>
                        <div className="bg-zinc-700 dark:bg-white/30 w-4 h-0.5 ml-2 md:hidden" />
                    </div>

                    <div className="flex flex-col md:flex-row justify-between ">
                        <div className="md:mr-8 ">
                            <h2 className="font-bold text-4xl text-center md:text-start mb-4 ">
                                Něco málo o mně
                            </h2>
                            <div className="text-md text-center md:text-start  text-black/70 dark:text-white/90 mb-4 max-w-[550px]">
                                <p>
                                    Jmenuji se Ondřej Všetička, je mi 19 let a
                                    vystudoval jsem obor Informační technologie.
                                    Za celou dobu studování jsem našel zálibu ve
                                    tvorbě webových stránek.
                                </p>
                                <p className="mt-2">
                                    Nemám rád zastaralé věci, a proto weby
                                    tvořím pomocí nejmodernějších technologií.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center md:items-end mt-8 md:mt-0">
                            <h2 className="text-end text-4xl font-bold">
                                Mé zkušenosti
                            </h2>
                            <div className="md:w-[25%] w-[75%] h-[2px] bg-black dark:bg-white/90 mb-8" />
                            <div className="flex text-black/70 dark:text-white/80 items-center gap-6 xl:gap-12">
                                {skills.map((skill, index) => (
                                    <div
                                        className="flex flex-col items-center"
                                        key={index}
                                    >
                                        <skill.icon className="md:w-14 md:h-14 w-8 h-8" />
                                        <p className="text-center font-bold text-xs">
                                            {skill.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}
