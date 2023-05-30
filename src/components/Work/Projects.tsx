import { motion } from 'framer-motion';
import Kemp from './Kemp';

const Projects = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: '25%' }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                id="Projects"
                className="container mx-auto px-8  py-[32px]"
            >
                <div className="mb-12">
                    <div className="flex flex-row items-center md:justify-start justify-center">
                        <div className="bg-zinc-700 dark:bg-white/30 w-4 h-0.5 mr-2" />
                        <h2 className="font-semibold text-xs text-zinc-700 dark:text-white/30">
                            PORTFOLIO
                        </h2>
                        <div className="bg-zinc-700 dark:bg-white/30 w-4 h-0.5 ml-2 md:hidden" />
                    </div>
                    <h2 className="font-bold text-4xl text-center md:text-start">
                        Mé vybrané projekty
                    </h2>
                </div>

                <Kemp />
            </motion.div>
        </>
    );
};
export default Projects;
