import Link from 'next/link';
import { FiLink } from 'react-icons/fi';
import Image from 'next/image';
export default function PRInsights() {
    return (
        <>
            <div className="flex md:flex-row flex-col justify-between my-16 md:gap-32 ">
                <div className="order-2 md:order-1">
                    <Link href="https://www.prinsights.cz/" target="_blank">
                        <Image
                            className="transition-all hover:scale-[101%] w-full h-[230px] xl:h-[280px] rounded-[15px] border shadow-md"
                            src="/PrInsights.png"
                            alt="PR Insights"
                            width={1920}
                            height={1080}
                        />
                    </Link>
                </div>
                <div className="order-1 md:order-2 md:w-[50%] xl:w-[40%]">
                    <h2 className="text-2xl font-bold mb-4">PR Insights</h2>
                    <p className="text-[16px]  text-black/70 dark:text-white/90">
                        Webové stránky pro PR specialistku Markétu. Jedná se o
                        informativní portfolio web, který je tvořen v
                        jednoduchém a přehledném designu.
                    </p>
                    <p className="text-lg font-bold mt-3 mb-3">
                        NextJS, TailwindCSS
                    </p>
                    <Link
                        className="flex items-center mb-8"
                        href="https://www.prinsights.cz/"
                        target="_blank"
                    >
                        <FiLink className="w-5 h-5 mr-2" /> Odkaz na web
                    </Link>
                </div>
            </div>
        </>
    );
}