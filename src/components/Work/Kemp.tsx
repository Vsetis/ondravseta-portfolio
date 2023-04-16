import Link from "next/link";
import { FiLink } from "react-icons/fi";
import Image from "next/image";
export default function Kemp() {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-between my-12">
        <div className="order-2 md:order-1">
          <Image
            className="w-[500px] rounded-[15px]"
            src="/Kemp.svg"
            alt="HC_Zubri"
            width={500}
            height={500}
          />
        </div>
        <div className="mb-8 order-1 md:order-2 md:ml-16">
          <h2 className="text-2xl font-bold mb-4">Kemp pod Pustevnami</h2>
          <p className="text-[16px]  text-black/70 dark:text-white/90">
            Kemp pod Pustevnami jsou webové stránky kempu. Dozvíte se zde
            veškeré informace, <br /> jako jsou např. Ceník, Aktuality z kempu a
            také se můžete mrknout na tipy na výlety.
          </p>
          <p className="text-lg font-bold mt-3 mb-5">EditorX</p>
          <Link
            className="flex items-center"
            href="https://www.podpustevnami.cz/"
            target="_blank"
          >
            <FiLink className="w-5 h-5 mr-2" /> Odkaz na web
          </Link>
        </div>
      </div>
    </>
  );
}
