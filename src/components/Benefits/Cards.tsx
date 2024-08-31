import { motion } from 'framer-motion';
import { MdWebAsset, MdPerson, MdDesignServices } from 'react-icons/md';
import {BiConversation} from "react-icons/bi";

const cards = [
    {
        title: 'Konzultace',
        delay: 0.1,
        icon: BiConversation,
        content:
            'Jsem tu pro vás! Pomůžu vám vybrat to nejlepší, abyste zbytečně neutráceli za webovou aplikaci nebo stránku, kterou nevyužijete.',
    },
    {
        title: 'Osobní Přístup',
        delay: 0.2,
        icon: MdPerson,
        content:
            'Budu se snažit Vám ulehčit co nejvíce práce, prvotní návrh webu nabízím ZDARMA a po dobu celé spolupráce se Vám budu snažit pomáhat.',
    },
    {
        title: 'Kompletní Vývoj',
        delay: 0.3,
        icon: MdWebAsset,
        content:
            'Nabízím Vám kompletní vývoj webových stránek. Od návrhu až po finální verzi webu se postarám osobně já.',
    },
    {
        title: 'Moderní Design',
        delay: 0.4,
        icon: MdDesignServices,
        content:
            'Je důležité, aby vaše webové stránky na první pohled zaujaly vaše publikum. Proto by měly být jedinečné a hlavně přehledné.',
    },
];

export default function Cards() {
    return (
        <>
            <div className="grid lg:grid-cols-2 gap-16 md:grid-cols-2 grid-cols-1 mt-16">
                {cards.map((card) => (
                    <motion.div
                        initial={{ opacity: 0, y: '25%' }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: card.delay, duration: 0.5 }}
                        viewport={{ amount: 0.5, once: true }}
                        className="p-8 rounded-md shadow-lg shadow-black/20   dark:shadow-inner dark:shadow-white/10 dark:border-white/20 dark:text-white/90 "
                        key={card.title}
                    >
                        <card.icon className="w-8 h-8 mb-2" />
                        <h3 className="text-2xl font-semibold">{card.title}</h3>
                        <p className="text-sm font-semibold text-black/60 dark:text-white/70">
                            {card.content}
                        </p>
                    </motion.div>
                ))}
            </div>
        </>
    );
}
