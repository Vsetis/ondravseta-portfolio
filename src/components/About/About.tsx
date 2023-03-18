import { DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { AiFillHtml5 } from "react-icons/ai";
export default function About() {
  const skills = [
    { title: " ReactJs 60%", icon: DiReact, id: 1 },
    { title: " TailwindCss 90%", icon: SiTailwindcss, id: 2 },
    { title: " Html 90%", icon: AiFillHtml5, id: 3 },
    { title: " MySql 80%", icon: GrMysql, id: 4 },
  ];
  return (
    <>
      <div id="About" className="container mx-auto py-[64px] px-5 md:px-0">
        <div className="flex flex-col">
          <div className="flex flex-row items-center md:justify-start justify-center">
            <div className="bg-indigo-500 w-8 h-0.5 mr-2" />
            <h2 className="font-semibold text-xs text-indigo-500">ABOUT</h2>
            <div className="bg-indigo-500 w-8 h-0.5 ml-2 md:hidden" />
          </div>

          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:mr-8 ">
              <h2 className="font-bold text-4xl text-center md:text-start mb-4 ">
                Něco málo o mně
              </h2>
              <p className="text-md text-center md:text-start font-semibold text-black/70 mb-4">
                Jmenuji se Ondřej Všetička, je mi 18 let a jsem student IT
                oboru. Za celou dobu studování jsem našel zálibu ve tvorbě
                webových stránek.
                <div className="my-2" />
                Nemám rád zastaralé věci, a proto weby tvořím pomocí
                nejmodernějších technologií.
              </p>
              <div className="flex flex-row items-center justify-center md:justify-start mt-8 mb-8 md:mb-0">
                <h2 className="font-bold text-xs text-black/70">SKILLS</h2>
                <div className="h-[16px] w-0.5 bg-black/70 ml-2 " />
                <div className="flex flex-row">
                  {skills.map((skill) => (
                    <div
                      key={skill.id}
                      className="flex flex-col items-center mx-2 text-xs text-sky-500 [&:nth-child(2)]:text-teal-500 [&:nth-child(3)]:text-orange-500 last:text-slate-700">
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
