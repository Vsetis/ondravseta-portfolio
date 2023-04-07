import Kemp from "./Kemp";
import Zubri from "./Zubri";

const Projects = () => {
  return (
    <>
      <div id="Projects" className="container mx-auto px-8  py-[32px]">
        <div className="mb-12">
          <div className="flex flex-row items-center md:justify-start justify-center">
            <div className="bg-zinc-700 dark:bg-white/30 w-4 h-0.5 mr-2" />
            <h2 className="font-semibold text-xs text-zinc-700 dark:text-white/30">
              Portfolio
            </h2>
            <div className="bg-zinc-700 dark:bg-white/30 w-4 h-0.5 ml-2 md:hidden" />
          </div>
          <h2 className="font-bold text-4xl text-center md:text-start">
            Mé vybrané projekty
          </h2>
        </div>

        <Kemp />
      </div>
    </>
  );
};
export default Projects;
