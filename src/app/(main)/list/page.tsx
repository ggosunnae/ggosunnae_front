"use client";
import React, { useState } from "react";
import Header from "@/components/Common/Header";
import Nav from "@/components/Layout/Nav";
import PopularPuppy from "@/components/Pages/main/PopularPuppy";
import Puppy from "@/components/Pages/main/Puppy";

const Page = () => {
  const [selectedTab, setSelectedTab] = useState<"puppy" | "popularPuppy">(
    "puppy",
  );

  const handleTabClick = (tabName: "puppy" | "popularPuppy") => {
    setSelectedTab(tabName);
  };

  return (
    <div className="bg-white">
      <Header />
      <main className="no-scrollbar h-[calc(100vh-100px)] overflow-y-scroll">
        <ul className="border-gray3 flex gap-[24px] border-b-[1px] px-[16px] pt-[8px]">
          <li
            className={`${selectedTab === "puppy" ? "border-b-2 border-black" : "cursor-pointer"}`}
            onClick={() => handleTabClick("puppy")}
          >
            꼬순내
          </li>
          <li
            className={`${selectedTab === "popularPuppy" ? "border-b-2 border-black" : "cursor-pointer"}`}
            onClick={() => handleTabClick("popularPuppy")}
          >
            인기댕
          </li>
        </ul>
        {selectedTab === "puppy" && <Puppy />}
        {selectedTab === "popularPuppy" && <PopularPuppy />}

        {/* <Challenge /> */}
      </main>
      <Nav />
    </div>
  );
};

export default Page;
