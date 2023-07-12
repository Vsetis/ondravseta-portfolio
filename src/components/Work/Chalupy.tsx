import Link from 'next/link';
import { FiLink } from 'react-icons/fi';
import Image from 'next/image';
import GhostyLogo from '../GhostyLogo';
export default function Kemp() {
    return (
        <>
            <div className="flex md:flex-row flex-col justify-between my-12 xl:gap-32">
                <div className="order-2 md:order-1">
                    <Link
                        href="https://www.chalupykarolinka.cz/"
                        target="_blank"
                    >
                        <Image
                            className=" transition-all hover:scale-[101%] w-full h-[230px] xl:h-[280px] rounded-[15px] border shadow-md"
                            src="/chalupyKarolinka.png"
                            alt="Chalupy Karolinka"
                            width={1920}
                            height={1080}
                        />
                    </Link>
                </div>
                <div className="order-1 md:order-2 md:ml-16 xl:w-[40%]">
                    <h2 className="text-2xl font-bold mb-4">
                        Chalupy Karolinka
                    </h2>
                    <p className="text-[16px]  text-black/70 dark:text-white/90">
                        Chalupy Karolinka jsou informační webové stránky pro dvě
                        chalupy, které se nachází ve městě Karolinka. Při tvorbě
                        těchto webových stránek jsem spolupracoval s firmou
                        Ghosty digital s.r.o.
                    </p>
                    <p className="text-lg font-bold mt-3 mb-3">
                        NuxtJS, TailwindCSS
                    </p>
                    <div className="flex flex-row items-center gap-8 mb-8">
                        <Link
                            className="flex items-center"
                            href="https://www.chalupykarolinka.cz/"
                            target="_blank"
                        >
                            <FiLink className="w-5 h-5 mr-2" /> Odkaz na web
                        </Link>
                        <Link
                            className="flex items-center transition-all hover:opacity-80"
                            href="https://www.chalupykarolinka.cz/"
                            target="_blank"
                        >
                            <GhostyLogo />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
