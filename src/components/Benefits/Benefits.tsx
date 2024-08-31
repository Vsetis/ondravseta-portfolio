import { motion } from 'framer-motion';
import Cards from './Cards';

export default function Services() {
    return (
        <>
            <motion.div className="w-full h-full dark:bg-gradient-to-b from-white/5 border-t border-black/20 dark:border-t-white/20 to-black">
                <div className="container mx-auto py-[128px] px-8 ">
                    <motion.h2
                        initial={{ opacity: 0, y: '100%' }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 1, once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold text-center"
                    >
                       Nabízím vám
                    </motion.h2>
                    <Cards />
                </div>
            </motion.div>
        </>
    );
}
