import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { FiMoon } from "react-icons/fi";
import { MdOutlineWbSunny } from "react-icons/md";

export type IconName = "dark" | "light" | "close";

export default function VariableIcon({ name }: { name: IconName }) {
  const components = {
    dark: FiMoon,
    light: MdOutlineWbSunny,
    close: IoMdCloseCircle,
  };
  const Icon = components[name];

  return <Icon />;
}
