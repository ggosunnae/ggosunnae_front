import BNB from "@/components/Common/BNB";
import Chip from "@/components/Common/Chip";
import Complete from "@/components/Common/Complete/Bottom";
import Top from "@/components/Common/Complete/Top";
import Filter from "@/components/Common/Filter";
import Input from "@/components/Common/Input/Input";
import Select from "@/components/Common/Input/Select";
import React from "react";

const page = () => {
  return (
    <main className="bg-[#acf]">
      <div className="scrollbar-hide flex gap-2 overflow-x-auto">
        <Chip label="칩" />
        <Chip label="칩칩" />
        <Chip label="칩칩칩" />
        <Chip label="칩칩칩칩" />
        <Chip label="칩2" />
        <Chip label="칩칩2" />
        <Chip label="칩칩칩2" />
        <Chip label="칩칩칩칩2" />
      </div>
      <BNB />
      <Top>완료</Top>
      <Top active={true}>완료</Top>
      <Complete type="button" check={true}>
        완료
      </Complete>
      <Complete type="button" check={false}>
        완료
      </Complete>
      <Select />
      <Input approve={true} />
      <Input error={"이미 사용중인 ID입니다"} />
      <Input />

      <Filter>견종</Filter>
      <Filter>최신순</Filter>
    </main>
  );
};

export default page;
