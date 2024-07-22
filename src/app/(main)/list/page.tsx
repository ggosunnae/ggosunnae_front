"use client";

import React, { useState } from "react";

import CategoryBar from "@/components/Common/CategoryBar";
import Header from "@/components/Common/Header";
import Nav from "@/components/Layout/Nav";
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
      <Nav />
    </div>
  );
};

export default Page;
