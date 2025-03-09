import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const socials = [
    { target: 'https://github.com/Vsetis', icon: AiFillGithub },
    {
        target: 'https://www.linkedin.com/in/ond%C5%99ej-v%C5%A1eti%C4%8Dka-7376a0271/',
        icon: AiFillLinkedin,
    },
];

export default function Socials() {
    return (
        <>
            <div className="flex ">
                {socials.map((social) => (
                    <Link
                        key={social.target}
                        href={social.target}
                        className="mr-8 transition-all hover:scale-105"
                        target="_blank"
                    >
                        <social.icon className="w-8 h-8" />
                    </Link>
                ))}
            </div>
        </>
    );
}
