"use client";

import React, { useState } from "react";

import BNB from "@/components/Common/BNB";
import CategoryBar from "@/components/Common/CategoryBar";
import Header from "@/components/Layout/Header";
import PopularPuppy from "@/components/Pages/main/list/PopularPuppy";
import Puppy from "@/components/Pages/main/list/Puppy";

const Page = () => {
  const [selectedTab, setSelectedTab] = useState<"puppy" | "popularPuppy">("puppy");

  const handleTabClick = (tabName: "puppy" | "popularPuppy") => {
    setSelectedTab(tabName);
  };

  return (
    <div className="bg-white">
      <Header />
      <main className="no-scrollbar h-[calc(100vh-100px)] overflow-y-scroll">
        <CategoryBar selectedTab={selectedTab} handleTabClick={handleTabClick} />
        {selectedTab === "puppy" && <Puppy />}
        {selectedTab === "popularPuppy" && <PopularPuppy />}
      </main>
      <BNB />
    </div>
  );
};

export default Page;
