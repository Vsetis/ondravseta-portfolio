import { DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { AiFillHtml5 } from "react-icons/ai";
export default function About() {
  const skills = [
    { title: " ReactJS 60%", icon: DiReact, id: 1 },
    { title: " TailwindCSS 90%", icon: SiTailwindcss, id: 2 },
    { title: " HTML 90%", icon: AiFillHtml5, id: 3 },
    { title: " MySQL 80%", icon: GrMysql, id: 4 },
  ];
  return (
    <>
      <div id="About" className="container mx-auto  px-5 md:px-0 py-[128px]">
        <div className="flex flex-col">
          <div className="flex flex-row items-center md:justify-start justify-center">
            <div className="bg-indigo-500 w-4 h-0.5 mr-2" />
            <h2 className="font-semibold text-xs text-indigo-500">O MNĚ</h2>
            <div className="bg-indigo-500 w-4 h-0.5 ml-2 md:hidden" />
          </div>

          <div className="flex flex-col md:flex-row justify-between ">
            <div className="md:mr-8 ">
              <h2 className="font-bold text-4xl text-center md:text-start mb-4 ">
                Něco málo o mně
              </h2>
              <div className="text-md text-center md:text-start  text-black/70 dark:text-white/90 mb-4 max-w-[550px]">
                <p>
                  Jmenuji se Ondřej Všetička, je mi 18 let a jsem student IT
                  oboru. Za celou dobu studování jsem našel zálibu ve tvorbě
                  webových stránek.
                </p>
                <p className="mt-2">
                  Nemám rád zastaralé věci, a proto weby tvořím pomocí
                  nejmodernějších technologií.
                </p>
              </div>
              <div className="flex flex-row items-center justify-center md:justify-start mt-8 mb-8 md:mb-0">
                <h2 className="font-bold text-xs text-black/70 dark:text-white">
                  SKILLS
                </h2>
                <div className="h-[16px] w-0.5 bg-black/70 dark:bg-white ml-2 " />
                <div className="flex flex-row">
                  {skills.map((skill) => (
                    <div
                      key={skill.id}
                      className="flex flex-col items-center mx-2 text-xs text-center text-sky-500 [&:nth-child(2)]:text-teal-500 [&:nth-child(3)]:text-orange-500 last:text-slate-700 dark:last:text-slate-300"
                    >
                      <skill.icon className="w-6 h-6 " />
                      {skill.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <img
                className="rounded-[15px] md:max-w-[550px]"
                src="/about.svg"
                alt="about_me"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
