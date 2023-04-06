import ChangeTheme from "../ChangeTheme";
import Links from "./Links";
import Socials from "./Socials";

export default function Navbar() {
  return (
    <>
      <div className="w-full md:container mx-auto py-8 fixed bg-black/90 text-white md:bg-transparent md:text-black dark:text-white top-0 z-10 md:relative px-5 md:px-0">
        <div className="flex md:flex-row flex-col justify-between md:items-center">
          <Socials />
          <Links />
        </div>
      </div>
    </>
  );
}
