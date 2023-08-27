import { motion } from 'framer-motion';
import { MdWebAsset, MdPerson, MdDesignServices } from 'react-icons/md';
export default function Cards() {
    const cards = [
        {
            title: 'Kompletní Vývoj',
            delay: 0.3,
            icon: MdWebAsset,
            content:
                'Nabízím Vám kompletní vývoj moderních a přehledných webových stránek. Od návrhu až po finální verzi webu se postarám osobně já.',
        },
        {
            title: 'Osobní Přístup',
            delay: 0.6,
            icon: MdPerson,
            content:
                'Budu se snažit Vám ulehčit co nejvíce práce, prvotní návrh webu nabízím zdarma a po dobu celé spolupráce se Vám budu snažit pomáhat.',
        },
        {
            title: 'Moderní Design',
            delay: 0.9,
            icon: MdDesignServices,
            content:
                'Je důležité, aby Vaše webové stránky na první pohled zaujaly Vaše zákazníky, a proto by měl být web moderní a přehledný.',
        },
    ];
    return (
        <>
            <div className="grid lg:grid-cols-3 gap-16 md:grid-cols-2 grid-cols-1 mt-16">
                {cards.map((card) => (
                    <motion.div
                        initial={{ opacity: 0, y: '25%' }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: card.delay, duration: 0.5 }}
                        viewport={{ amount: 0.5 }}
                        className="p-8 shadow-lg shadow-black/20   dark:shadow-inner dark:shadow-white/10 dark:border-white/20 dark:text-white/90 "
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
