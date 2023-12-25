"use client";

import { getScrollBarWidth } from "@/hooks/dom";
import clsx from "clsx";
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
        topbar
      </div>
    </header>
  );
};

export default TopBar;
