import Kemp from "./Kemp";
import Zubri from "./Zubri";

const Projects = () => {
  return (
    <>
      <div id="Projects" className="container mx-auto px-8 md:px-0 py-[128px]">
        <div className="mb-12">
          <div className="flex flex-row items-center md:justify-start justify-center">
            <div className="bg-indigo-500 w-8 h-0.5 mr-2" />
            <h2 className="font-semibold text-xs text-indigo-500">PROJECTS</h2>
            <div className="bg-indigo-500 w-8 h-0.5 ml-2 md:hidden" />
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
