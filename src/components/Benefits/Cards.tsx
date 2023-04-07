import { MdWebAsset, MdPerson, MdDesignServices } from "react-icons/md";
export default function Cards() {
  const cards = [
    {
      title: "Kompletní Vývoj",
      icon: MdWebAsset,
      content:
        "Od samotného návrhu až po plně funkční verzi webu se postarám já. Všechny starosti nechte na mě a věnujte čas do svého podnikání",
    },
    {
      title: "Osobní Přístup",
      icon: MdPerson,
      content:
        "Od samotného začátku se vám budu snažit co nejvíce ulehčit práci. Veškeré konzultace a prvotní návrh webu nabízím pro pohodlný postup zdarma.",
    },
    {
      title: "Moderní Design",
      icon: MdDesignServices,
      content:
        "Se mnou se odlišíte od konkurence a budete o několik kroků napřed. Každý den sleduji nejnovější designové trendy a aplikuji je i do webů svých klientů",
    },
  ];
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-16 md:grid-cols-2 grid-cols-1 mt-16">
        {cards.map((card) => (
          <div
            className="p-8 shadow-lg shadow-black/20   dark:shadow-inner dark:shadow-white/10 dark:border-white/20 dark:text-white/90 "
            key={card.title}
          >
            <card.icon className="w-8 h-8 mb-2" />
            <h3 className="text-2xl font-semibold">{card.title}</h3>
            <p className="text-sm font-semibold text-black/60 dark:text-white/70">
              {card.content}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
