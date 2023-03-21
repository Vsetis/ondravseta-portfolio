import { DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { AiFillHtml5 } from "react-icons/ai";
import { useState } from "react";
const Skills = () => {
  const [text, setText] = useState(false);
  return (
    <>
      <div className="container mx-auto">
        <div className="flex">
          <div
            onMouseEnter={() => setText(!text)}
            onMouseLeave={() => setText(!text)}
            className="bg-black text-white rounded-full relative flex flex-col items-center justify-center cursor-pointer"
          >
            <DiReact className={`${text ? "invisible" : ""} h-16 w-16`} />
            <p
              className={
                text ? "visible absolute text-center" : "invisible absolute"
              }
            >
              React 90%
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
