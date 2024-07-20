"use client";
import React, { useState } from "react";
import Header from "@/components/Common/Header";
import Nav from "@/components/Layout/Nav";
import PopularPuppy from "@/components/Pages/main/PopularPuppy";
import Puppy from "@/components/Pages/main/Puppy";
import CategoryBar from "@/components/Common/CategoryBar";

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
      <main className="no-scrollbar h-[calc(100vh-100px)]">
        <CategoryBar
          selectedTab={selectedTab}
          handleTabClick={handleTabClick}
        />
        {selectedTab === "puppy" && <Puppy />}
        {selectedTab === "popularPuppy" && <PopularPuppy />}
      </main>
      <Nav />
    </div>
  );
};

export default Page;
