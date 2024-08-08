"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React, { MouseEventHandler, useEffect, useState } from "react";

import { animated, useSpring } from "@react-spring/web";

const linkstyle = "cursor-pointer pb-3 font-semibold";

const Navbar = () => {
  const pathname = usePathname();
  const [position, setPosition] = useState({ left: 0, width: 0 });

  const styles = useSpring({
    left: position.left,
    width: position.width,
    config: { tension: 220, friction: 20 },
  });

  const clickHanlder: MouseEventHandler<HTMLAnchorElement> = (e) => {
    const left = e.currentTarget.offsetLeft;
    const width = e.currentTarget.clientWidth;
    setPosition({
      left,
      width,
    });
  };

  useEffect(() => {
    const element = document.querySelector(`a[href='${pathname}']`);
    if (element instanceof HTMLElement) {
      setPosition({
        left: element.offsetLeft,
        width: element.clientWidth,
      });
    }
  }, [pathname]);

  return (
    <div className="relative flex gap-6 border-b px-4 tracking-tight">
      <Link onClick={clickHanlder} href={"/mypage"} className={`${linkstyle} text-[#000]`}>
        북마크
      </Link>
      <Link onClick={clickHanlder} href={"/mypage/post"} className={`${linkstyle} text-[#777]`}>
        내가 작성한 글
      </Link>
      <Link onClick={clickHanlder} href={"/mypage/set"} className={`${linkstyle} text-[#777]`}>
        설정
      </Link>
      <animated.div
        style={styles}
        className="absolute bottom-0 left-0 h-[1px] w-full bg-black"
      ></animated.div>
    </div>
  );
};

export default Navbar;
