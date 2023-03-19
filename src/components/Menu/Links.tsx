import Link from "next/link";
import { useState } from "react";
import { HiOutlineBars2, HiXMark } from "react-icons/hi2";
import ChangeTheme from "../ChangeTheme";

export default function Links() {
  const links = [
    { name: "Home", target: "#", id: 1 },
    { name: "About", target: "#About", id: 2 },
    { name: "Projects", target: "#Projects", id: 3 },
    { name: "Contact", target: "#Contact", id: 4 },
  ];

  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className={`${
          show
            ? "flex flex-col md:flex-row border-t text-white mt-4"
            : "hidden md:flex"
        } relative`}
      >
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.target}
            className="text-md mr-8 my-6 text-center md:text-start"
            scroll={false}
          >
            {link.name}
          </Link>
        ))}
        <ChangeTheme />
      </div>

      <button
        onClick={() => setShow(!show)}
        className={show ? "flex md:hidden" : "md:hidden flex"}
      >
        {show ? (
          <HiXMark className="w-12 h-12 absolute right-5 top-8" />
        ) : (
          <HiOutlineBars2 className="w-12 h-12 absolute right-5 top-8" />
        )}
      </button>
    </>
  );
}
