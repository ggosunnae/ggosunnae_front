"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const Nav = () => {
  const [, , path] = usePathname().split("/");
  return (
    <nav>
      <ul className="flex gap-[19px]">
        {[
          {
            path: "post",
            name: "포스트",
          },
          {
            path: "user",
            name: "사용자",
          },
        ].map((el, index) => (
          <li
            key={index}
            className={`${path === el.path ? "border-b-2 border-mono-black text-mono-black" : "text-grayscale-gray2"}`}
          >
            <Link
              href={`/search/${el.path}`}
              className="pb-[6px] text-base font-semibold leading-6 tracking-tighter"
            >
              {el.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
