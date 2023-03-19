import { useTheme } from "next-themes";
import { useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

export default function ChangeTheme() {
  const { theme, setTheme } = useTheme();
  const [dark, setDark] = useState(theme === " dark" ? true : false);

  return (
    <>
      <button
        className="absolute md:top-0  md:right-[-16px] bottom-0 right-0"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
          setDark(!dark);
        }}
      >
        {dark ? (
          <CiDark className="w-8 h-8" />
        ) : (
          <CiLight className="w-8 h-8" />
        )}
      </button>
    </>
  );
}
