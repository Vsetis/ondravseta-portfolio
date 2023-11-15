import Link from 'next/link';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { MdEmail, MdPhoneIphone } from 'react-icons/md';
import { ImArrowUp2 } from 'react-icons/im';

const socials = [
    { target: 'https://github.com/Vsetis', icon: AiFillGithub },
    {
        target: 'https://www.instagram.com/ondra_vseta/',
        icon: AiFillInstagram,
    },
];

export default function Contact() {
    function scroll() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    return (
        <>
            <div
                id="Contact"
                className="dark:bg-black border-t border-black/20 dark:border-white/20 pt-[42px] pb-[16px] px-8  w-full"
            >
                <div className="container mx-auto flex md:flex-row flex-col justify-between">
                    <div className="flex flex-col mb-8 md:mb-0">
                        <h2 className="text-xl font-bold mb-3.5">Kontakt</h2>
                        <Link
                            className="flex items-center mb-2"
                            href="mailto:ondravseta@email.cz"
                        >
                            <MdEmail className="h-5 w-5 mr-2" />
                            ondravseta@email.cz
                        </Link>
                        <Link
                            className="flex items-center"
                            href="tel:+420 736 137 654"
                        >
                            <MdPhoneIphone className="h-5 w-5 mr-2" />
                            +420 736 137 654
                        </Link>
                    </div>
                    <div className="flex flex-row">
                        <button
                            className="flex flex-row items-center gap-4 underline transition-all dark:text-white hover:opacity-80"
                            onClick={scroll}
                        >
                            <ImArrowUp2 className="animate-bounce" />
                            <p className="font-semibold">NAHORU</p>
                        </button>
                    </div>
                    <div className="flex flex-col  justify-between">
                        <div className="flex flex-row md:self-end">
                            {socials.map((social, index) => (
                                <Link key={index} href={social.target}>
                                    <social.icon className="w-8 h-8 md:ml-2 md:mt-0  mt-8 mr-5 md:mr-0" />
                                </Link>
                            ))}
                        </div>
                        <div className="w-full h-[2px] md:my-8 my-4 bg-black dark:bg-white" />
                        <h2>© 2023 Ondřej Všetička</h2>
                    </div>
                </div>
            </div>
        </>
    );
}
