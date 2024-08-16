"use client";

import React, { useState } from "react";

import Filter from "@/components/Common/Filter";
import InfoToggle from "@/components/Common/InfoToggle";
import SortModal from "@/components/Modal/Select/SortModal";

interface PuppyFilterProps {
  onInfoToggle: (checked: boolean) => void;
}

const PuppyFilter = ({ onInfoToggle }: PuppyFilterProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [showSortModal, setShowSortModal] = useState(false);
  const [activeSort, setActiveSort] = useState("최신순");

  const handleToggle = (checked: boolean) => {
    setIsChecked(checked);
    onInfoToggle(checked);
  };

  const handleOpenSortModal = () => {
    setShowSortModal(true);
  };

  const handleCloseSortModal = () => {
    setShowSortModal(false);
  };

  const handleSelectSort = (sortType: string) => {
    setActiveSort(sortType);
    setShowSortModal(false);
  };

  return (
    <div className="flex justify-between px-[16px] py-[16px] pb-[8px]">
      <div className="flex items-center">
        <div className="mr-[5px] font-medium">정보 보기</div>
        <InfoToggle isChecked={isChecked} onToggle={handleToggle} />
      </div>
      <div>
        <Filter
          title="필터"
          active={activeSort}
          handler={handleOpenSortModal} // 모달 열기 핸들러
        >
          {activeSort}
        </Filter>
      </div>

      {showSortModal && (
        <SortModal
          isOpen={showSortModal}
          onClose={handleCloseSortModal}
          title="정렬기준"
          active={activeSort}
          handler={handleSelectSort}
        />
      )}
    </div>
  );
};

export default PuppyFilter;
