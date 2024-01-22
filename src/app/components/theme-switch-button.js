"use client";
import React, { useState } from "react";
import {useTranslation} from "react-i18next";

export default function ThemeSwitchButton() {
  const { t } = useTranslation();

  const [theme, setTheme] = useState("light");
  console.log(theme);
  return (
    <div className="flex flex-row bg-[#F5F5F5] rounded-[40px] px-2 py-2 gap-x-5">
      <button
        className={
          "rounded-[40px] px-5 py-px " + (theme === "light" ? "bg-white" : "")
        }
        onClick={() => {
          setTheme("light");
        }}
      >
        <p>{t("theme.light")}</p>
      </button>
      <button
        className={
          "rounded-[40px] px-5 py-px " + (theme === "dark" ? "bg-white" : "")
        }
        onClick={() => {
          setTheme("dark");
        }}
      >
        <p>{t("theme.dark")}</p>
      </button>
    </div>
  );
}
