import Links from './Links';
import Socials from './Socials';
import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: '10%' }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full md:container mx-auto py-8 fixed bg-black/90 text-white md:bg-transparent md:text-black dark:text-white top-0 z-10 md:relative px-5 md:px-0"
            >
                <div className="flex md:flex-row flex-col justify-between md:items-center">
                    <Socials />
                    <Links />
                </div>
            </motion.div>
        </>
    );
}
