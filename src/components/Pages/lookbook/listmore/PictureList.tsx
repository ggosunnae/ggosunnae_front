"use client";

import React, { useState } from "react";

import Filter from "@/components/Common/Filter";
import SortModal from "@/components/Modal/Select/SortModal";

function PictureList() {
  const [showSortModal, setShowSortModal] = useState(false);
  const [activeBreed, setActiveBreed] = useState("견종");
  const [activeSize, setActiveSize] = useState("사이즈");
  const [activeStyle, setActiveStyle] = useState("스타일");
  const [activeRecommend, setActiveRecommend] = useState("추천순");

  const handleOpenSortModal = () => {
    setShowSortModal(true);
  };

  const handleCloseSortModal = () => {
    setShowSortModal(false);
  };

  const handleSelectSort = (sortType: string) => {
    setActiveBreed(sortType);
    setShowSortModal(false);
  };
  return (
    <>
      <div className="flex gap-3 justify-end">
        <Filter title="견종" active={activeBreed} handler={handleOpenSortModal}>
          {activeBreed}
        </Filter>
        <Filter title="사이즈" active={activeSize} handler={handleOpenSortModal}>
          {activeSize}
        </Filter>
        <Filter title="스타일" active={activeStyle} handler={handleOpenSortModal}>
          {activeStyle}
        </Filter>
        <Filter title="추천순" active={activeRecommend} handler={handleOpenSortModal}>
          {activeRecommend}
        </Filter>
      </div>

      {showSortModal && (
        <SortModal
          isOpen={showSortModal}
          onClose={handleCloseSortModal}
          title="정렬기준"
          active={activeBreed}
          handler={handleSelectSort}
        />
      )}
    </>
  );
}

export default PictureList;
