import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { CiDark, CiLight } from "react-icons/ci";
const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "dark" ? (
        <CiLight className="w-6 h-6" />
      ) : (
        <CiDark className="w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeSwitch;
