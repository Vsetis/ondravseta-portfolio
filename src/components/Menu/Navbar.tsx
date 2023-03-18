import Links from "./Links";
import Socials from "./Socials";

export default function Navbar() {
  return (
    <>
      <div className="container mx-auto py-8 fixed bg-black/90 text-white md:bg-white md:text-black top-0 z-10 md:relative px-5 md:px-0">
        <div className="flex md:flex-row flex-col justify-between">
          <Socials />
          <Links />
        </div>
      </div>
    </>
  );
}
