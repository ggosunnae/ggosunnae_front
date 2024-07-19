import BNB from "@/components/Common/BNB";
import Complete from "@/components/Common/Complete/Bottom";
import Top from "@/components/Common/Complete/Top";
import Filter from "@/components/Common/Filter";
import Input from "@/components/Common/Input/Input";
import Select from "@/components/Common/Input/Select";
import React from "react";

const page = () => {
  return (
    <main className="bg-[#acf]">
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
