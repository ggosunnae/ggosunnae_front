import BNB from "@/components/Common/BNB";
import Complete from "@/components/Common/Complete/Bottom";
import Top from "@/components/Common/Complete/Top";
import React from "react";

const page = () => {
  return (
    <main className="bg-red-500">
      <BNB />
      <Top>완료</Top>
      <Top active={true}>완료</Top>
      <Complete type="button" check={true}>
        완료
      </Complete>
      <Complete type="button" check={false}>
        완료
      </Complete>
    </main>
  );
};

export default page;
