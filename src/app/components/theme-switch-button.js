"use client";
import React, { useState } from "react";

export default function ThemeSwitchButton() {
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
        <p>Jasny</p>
      </button>
      <button
        className={
          "rounded-[40px] px-5 py-px " + (theme === "dark" ? "bg-white" : "")
        }
        onClick={() => {
          setTheme("dark");
        }}
      >
        <p>Ciemny</p>
      </button>
    </div>
  );
}
