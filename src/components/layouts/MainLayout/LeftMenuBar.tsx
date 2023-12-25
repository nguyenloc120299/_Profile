"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

const LeftMenuBar: React.FC = () => {
  const currentSegment = useSelectedLayoutSegment();

  const checkActive = (segment: string | string[]) =>
    typeof segment === "string"
      ? currentSegment === segment
      : segment.includes(currentSegment as string);

  return (
    <nav className="sticky left-0 top-[60rem] h-fit min-h-[calc(100vh-60rem)] w-[274rem] bg-white p-8 max-d:hidden">
      <Link
        href={"#"}
        className={clsx("mb-2 flex items-center rounded-xl px-5 py-3", {})}
      >
        <span className="ml-3">11111</span>
      </Link>
    </nav>
  );
};

export default LeftMenuBar;
