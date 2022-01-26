import React from "react";
import { useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function ThemeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode === "light") {
    return <MoonIcon w={6} h={6} onClick={toggleColorMode} />;
  } else return <SunIcon w={6} h={6} onClick={toggleColorMode} />;
}

export default ThemeSwitch;
