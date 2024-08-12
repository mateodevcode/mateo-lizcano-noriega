"use client";
import { useState } from "react";
import { BsMoonFill, BsSun } from "react-icons/bs";

const DarkMode = () => {
  const [themma, setThemma] = useState("");

  const changeTheme = () => {
    if (themma == "light") {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setThemma("dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setThemma("light");
    }
  };  

  return (
    <div
      onClick={changeTheme}
      className="cursor-pointer mx-2 flex flex-row justify-center items-center"
    >
      {themma == "light" ? (
        <BsMoonFill className="text-xl dark:hover:text-slate-400 hover:text-slate-700" />
      ) : (
        <BsSun className="text-xl dark:hover:text-slate-400 hover:text-slate-700" />
      )}
    </div>
  );
};

export default DarkMode;
