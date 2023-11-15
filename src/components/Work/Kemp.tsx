import Link from 'next/link';
import { FiLink } from 'react-icons/fi';
import Image from 'next/image';

export default function Kemp() {
    return (
        <>
            <div className="flex md:flex-row flex-col justify-between my-16 md:gap-32">
                <div className="order-2 md:order-1">
                    <Link href="https://www.podpustevnami.cz/" target="_blank">
                        <div className="relative transition-all hover:scale-[101%] min-w-[100%] md:min-w-[550px] h-[230px] xl:h-[280px] rounded-[15px]  shadow-md">
                            <Image
                                className="absolute w-full h-full object-cover rounded-[15px]"
                                src="/Kemp.png"
                                alt="Kemp pod Pustevnami"
                                width={1920}
                                height={1080}
                            />
                        </div>
                    </Link>
                </div>
                <div className="order-1 md:order-2 md:w-[50%] xl:w-[40%]">
                    <h2 className="text-2xl font-bold mb-4">
                        Kemp pod Pustevnami
                    </h2>
                    <p className="text-[16px]  text-black/70 dark:text-white/90">
                        Kemp pod Pustevnami jsou webové stránky kempu. Dozvíte
                        se zde veškeré informace, jako jsou např. Ceník,
                        Aktuality z kempu a také se můžete mrknout na tipy na
                        výlety.
                    </p>
                    <p className="text-lg font-bold mt-3 mb-3">EditorX</p>
                    <Link
                        className="flex items-center mb-8"
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
