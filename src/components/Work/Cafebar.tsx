import Link from 'next/link';
import { FiLink } from 'react-icons/fi';
import Image from 'next/image';
export default function Cafebar() {
    return (
        <>
            <div className="flex md:flex-row flex-col justify-between my-16 md:gap-32">
                <div className="order-2 md:order-1">
                    <Link
                        href="https://cafebar-u-medvidku.vercel.app/"
                        target="_blank"
                    >
                        <div className="relative transition-all hover:scale-[101%] min-w-[100%] md:min-w-[550px] h-[230px] xl:h-[280px] rounded-[15px]  shadow-md">
                            <Image
                                className="absolute w-full h-full object-cover rounded-[15px]"
                                src="/Cafebar.png"
                                alt="Cafebar U Medvidku"
                                width={1920}
                                height={1080}
                            />
                        </div>
                    </Link>
                </div>
                <div className="order-1 md:order-2 md:w-[50%] xl:w-[40%]">
                    <h2 className="text-2xl font-bold mb-4">
                        Cafebar U Medvídků
                    </h2>
                    <p className="text-[16px]  text-black/70 dark:text-white/90">
                        Webové stránky pro Cafebar U Medvídků. Informativní
                        stránky pro kavárnu, které jsou vytvořeny v jednoduchém
                        a přehledném designu, pomocí frameworku NextJS a
                        TailwindCSS.
                    </p>
                    <p className="text-lg font-bold mt-3 mb-3">
                        NextJS, TailwindCSS
                    </p>
                    <Link
                        className="flex items-center mb-8"
                        href="https://cafebar-u-medvidku.vercel.app/"
                        target="_blank"
                    >
                        <FiLink className="w-5 h-5 mr-2" /> Odkaz na web
                    </Link>
                </div>
            </div>
        </>
    );
}
