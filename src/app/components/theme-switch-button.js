"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { changeColorScheme } from "@/app/lib/store";

export default function ThemeSwitchButton() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const theme = useSelector((state) => {
    return state.colorSchemeState.usedColorScheme;
  });

  console.log(theme);
  return (
    <div className="flex flex-row bg-[#F5F5F5] rounded-[40px] px-2 py-2 gap-x-5">
      <button
        className={
          "rounded-[40px] px-5 py-px " + (theme === "light" ? "bg-white" : "")
        }
        onClick={() => {
          dispatch(changeColorScheme("light"));
        }}
      >
        <p>{t("theme.light")}</p>
      </button>
      <button
        className={
          "rounded-[40px] px-5 py-px " + (theme === "dark" ? "bg-white" : "")
        }
        onClick={() => {
          dispatch(changeColorScheme("dark"));
        }}
      >
        <p>{t("theme.dark")}</p>
      </button>
    </div>
  );
}
