import Link from "next/link";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
export default function Socials() {
  const socials = [
    { target: "https://github.com/Vsetis", icon: AiFillGithub, id: 1 },
    {
      target: "https://www.instagram.com/modernweb.cz/",
      icon: AiFillInstagram,
      id: 2,
    },
  ];
  return (
    <>
      <div className="flex ">
        {socials.map((social) => (
          <Link
            key={social.id}
            href={social.target}
            className="mr-8"
            target="_blank"
          >
            <social.icon className="w-8 h-8" />
          </Link>
        ))}
      </div>
    </>
  );
}
