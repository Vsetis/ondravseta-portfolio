import Cards from "./Cards";

export default function Services() {
  return (
    <>
      <div className="w-full h-full dark:bg-gradient-to-b from-white/5 border-t border-black/20 dark:border-t-white/20 to-black">
        <div className="container mx-auto py-[128px] px-8 ">
          <h2 className="text-4xl font-bold text-center">
            Co Vám mohu nabídnout
          </h2>
          <Cards />
        </div>
      </div>
    </>
  );
}
