"use client";

import { getScrollBarWidth } from "@/hooks/dom";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect } from "react";

const TopBar = () => {

  useEffect(() => {
    const header = document.getElementById("app-header")!;
    const scrollBarWidth = getScrollBarWidth();
    const checkHasScrollBar = () => {
      const paddingRight =
        window.innerWidth <= document.documentElement.clientWidth
          ? `${scrollBarWidth}px`
          : "0";
      document.body.style.paddingRight = paddingRight;
      header.style.paddingRight = paddingRight;
    };

    const resizeObserver = new ResizeObserver(checkHasScrollBar);

    checkHasScrollBar();

    resizeObserver.observe(document.body);

    return () => resizeObserver.disconnect();
  }, []);
  return (
    <header
      id="app-header"
      className={clsx(
        "fixed inset-x-0 top-0 z-20 w-screen bg-white",
        "border-b border-solid border-Gray/3"
      )}
    >
      <div className="mx-auto w-full flex h-[60rem] max-w-[1200rem] items-center justify-between px-4 t:px-8">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{`<TL />`}</span>
        </Link>

        <div className="hidden w-full t:block t:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 t:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 t:flex-row t:space-x-8 rtl:space-x-reverse t:mt-0 t:border-0 t:bg-white dark:bg-gray-800 t:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/" className="block py-2 px-3 text-white bg-blue-700 rounded t:bg-transparent t:text-blue-700 t:p-0 dark:text-white t:dark:text-blue-500" >Home</Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 t:hover:bg-transparent t:border-0 t:hover:text-blue-700 t:p-0">About</Link>
            </li>
            <li>
              <Link href="/projects" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 t:hover:bg-transparent t:border-0 t:hover:text-blue-700 t:p-0">Projects</Link>
            </li>
            <li>
              <Link href="/resume" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 t:hover:bg-transparent t:border-0 t:hover:text-blue-700 t:p-0"> Resume</Link>
            </li>

          </ul>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
