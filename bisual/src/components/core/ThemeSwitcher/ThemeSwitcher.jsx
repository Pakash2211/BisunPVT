"use client";
import React from "react";
import "./ThemeSwitcher.css";
import Image from "next/image";
function ThemeSwitcher({ isDarkTheme, setIsDarkTheme }) {
  //   const { switcher, themes, currentTheme, status } = useThemeSwitcher();
  return (
    <div>
      {!isDarkTheme && (
        <Image
          src="/moon.png"
          alt="Moon"
          width={30}
          height={30}
          onClick={() => setIsDarkTheme(true)}
          //   onClick={() =>
          //     setIsDarkTheme((previous) => {
          //       switcher({ theme: previous ? themes.light : themes.dark });
          //       return !previous;
          //     })
          //   }
        />
      )}
      {isDarkTheme && (
        <Image
          src="/sun.png"
          alt="Sun"
          width={30}
          height={30}
          onClick={() => setIsDarkTheme(false)}
          //   onClick={() =>
          //     setIsDarkTheme((previous) => {
          //       switcher({ theme: previous ? themes.light : themes.dark });
          //       return !previous;
          //     })
          //   }
        />
      )}
    </div>
  );
}

export default ThemeSwitcher;
