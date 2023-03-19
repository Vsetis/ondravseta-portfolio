import Link from "next/link";
import { FiLink } from "react-icons/fi";

export default function Zubri() {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-between">
        <div className="mb-8 md:mr-8">
          <h2 className="text-2xl font-bold mb-4">HC Zubří</h2>
          <p className="text-lg font-semibold text-black/70">
            HC Zubří jsou webové stránky házenkářského klubu. <br /> Dozvíte se
            zde nejnovější aktuality z klubu a můžete si zde zarezervovat lístek
            na zápas
          </p>
          <p className="text-lg font-bold mt-3 mb-5">NextJS & TailwindCss</p>
          <Link
            className="flex items-center"
            href="https://www.hczubri.cz/"
            target="_blank"
          >
            <FiLink className="w-5 h-5 mr-2" /> Odkaz na web
          </Link>
        </div>
        <div>
          <img
            className="w-[650px] rounded-[15px]"
            src="uvodni-banner.svg"
            alt="HC_Zubri"
          />
        </div>
      </div>
    </>
  );
}
