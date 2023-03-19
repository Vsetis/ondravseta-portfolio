import { useTheme } from "next-themes";
import { useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

export default function ChangeTheme() {
  const { theme, setTheme } = useTheme();
  setTheme("system");
  return <></>;
}
