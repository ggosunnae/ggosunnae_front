"use client";

import React, { useState } from "react";

import AppBar from "@/components/Common/AppBar";
import Nav from "@/components/Layout/Nav";
import LookBook from "@/components/Pages/main/list/LookBook";
import LookBookDetail from "@/components/Pages/main/list/LookBookDetail";

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  const renderContent = () => {
    switch (selectedCategory) {
      case "ootd":
        return <LookBookDetail category="ootd" />;
      case "size":
        return <LookBookDetail category="size" />;
      case "item":
        return <LookBookDetail category="item" />;
      default:
        return <LookBook onCategoryClick={handleCategoryClick} />;
    }
  };

  return (
    <div className="bg-black">
      <AppBar type={selectedCategory ? "lookBook" : "ggoSunNae"} onBack={handleBack} />
      <main className="no-scrollbar h-[calc(100vh-100px)] overflow-y-scroll">
        {renderContent()}
      </main>
      <Nav />
    </div>
  );
};

export default Page;
