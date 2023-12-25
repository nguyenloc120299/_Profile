"use client";

interface Props {
  children: React.ReactNode;
}

import clsx from "clsx";
import React from "react";
import TopBar from "./TopBar";
import LeftMenuBar from "./LeftMenuBar";
import Bottombar from "./Bottombar";

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <TopBar />
      <main className={clsx("mx-auto max-w-[1200rem] max-t:pb-20 d:flex mt-[60rem]")}>
      <LeftMenuBar />
        <div className="relative px-5 d:w-[calc(100%-274rem)] d:px-[80rem]">
          {children}
        </div>
      </main>
      <Bottombar />
    </>
  );
};

export default MainLayout;
