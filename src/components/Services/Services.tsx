import Cards from "./Cards";

export default function Services() {
  return (
    <>
      <div className="w-full h-full dark:bg-gradient-to-b from-white/5 border-t border-black/20 dark:border-t-white/20 to-black">
        <div id="Services" className="container mx-auto py-[128px] px-8 ">
          <div className="flex flex-row items-center  justify-center">
            <div className="bg-zinc-700 dark:bg-white/30 w-4 h-0.5 mr-2" />
            <h2 className="font-semibold text-xs text-zinc-700 dark:text-white/30">
              SLUŽBY
            </h2>
            <div className="bg-zinc-700 dark:bg-white/30 w-4 h-0.5 ml-2 " />
          </div>
          <h2 className="text-4xl font-bold text-center">
            Co Vám mohu nabídnout
          </h2>
          <Cards />
        </div>
      </div>
    </>
  );
}
