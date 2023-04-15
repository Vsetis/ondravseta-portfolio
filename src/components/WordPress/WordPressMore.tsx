import { motion } from "framer-motion";

export default function WordPressMore() {
  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row justify-between md:py-16 py-32 md:px-0 px-6">
        <div className="md:w-[50%]">
          <motion.h2
            initial={{ opacity: 0, y: "50%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl  font-bold mb-8 text-center md:text-start"
          >
            Nevýhody WordPressu a podobných systémů
          </motion.h2>
          <div className="dark:text-white/70">
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="dark:text-white font-semibold">1. Bezpčenost</h3>
              <p className="mb-2">
                WordPress je často cílem útoků hackerů, což způsobuje
                zranitelnost stránek pro ztrátu dat a informací. To může mít
                vážné následky pro firmy a jednotlivce.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="dark:text-white font-semibold mt-3">
                2. Pomalá Rychlost
              </h3>
              <p className="mb-2">
                S narůstajícím počtem pluginů a šablon může dojít k zpomalení
                načítání stránek a ztrátě návštěvníků.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="dark:text-white font-semibold mt-3">
                3. Závislost na pluginy a šablony
              </h3>
              <p className="mb-2">
                Mnoho funkcí webových stránek je závislé na pluginy a šablony,
                což může vést k nestabilitě a obtížnému najití alternativních
                řešení.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="dark:text-white font-semibold mt-3">
                4. Omezená kontrola nad kódem
              </h3>
              <p className="mb-2">
                Pokud potřebujete upravit kód, budete se muset spolehnout na
                externí vývojáře, což může být drahé a může způsobit zpoždění v
                čase.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="dark:text-white font-semibold mt-3">
                5. Omezené možnosti SEO
              </h3>
              <p className="mb-2">
                WordPress má omezené možnosti SEO, a to zejména v oblasti
                technického SEO. To může vést k nižším pozicím ve vyhledávačích.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="dark:text-white font-semibold mt-3">
                6. Složitost
              </h3>
              <p className="mb-2">
                I když je WordPress poměrně snadno ovladatelný, může se stát, že
                při instalaci a konfiguraci dojde k chybám, které mohou být pro
                mnohé uživatele značným problémem.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="dark:text-white font-semibold mt-3">7. Náklady</h3>
              <p className="mb-2">
                Mnoho šablon a pluginů vyžaduje placení za použití, což může být
                pro některé uživatele nevhodné nebo příliš nákladné.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="dark:text-white font-semibold mt-3">
                8. Kompatibilita
              </h3>
              <p className="mb-2">
                Mnoho pluginů a šablon není kompatibilní s nejnovější verzí
                WordPressu nebo s jinými pluginy a šablonami. To může vést k
                chybám a problémům s funkcemi stránek.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="dark:text-white font-semibold mt-3">
                9. Zranitelnost kvůli zastaralosti
              </h3>
              <p className="mb-2">
                Pokud správce webu neaktualizuje svou instalaci WordPressu nebo
                pluginy, mohou se objevit zranitelnosti, které umožní hackerům
                snadný přístup na webové stránky.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="dark:text-white font-semibold mt-3">
                10. Nezávislost na třetích stranách
              </h3>
              <p className="mb-2">
                Pokud se rozhodnete přestat používat WordPress, budete muset
                najít
              </p>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: "25%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="max-w-[600px] mt-16 md:mt-0"
        >
          <img className="w-full" src="WP.svg" alt="WordPress" />
        </motion.div>
      </div>
    </>
  );
}
