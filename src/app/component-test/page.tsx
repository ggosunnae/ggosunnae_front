"use client";
import BNB from "@/components/Common/BNB";
import Chip from "@/components/Common/Chip";
import Complete from "@/components/Common/Complete/Bottom";
import Top from "@/components/Common/Complete/Top";
import Filter from "@/components/Common/Filter";
import Input from "@/components/Common/Input/Input";
import Select from "@/components/Common/Input/Select";
import CommentModal from "@/components/Modal/Comment/CommentModal";
import DogSelectModal from "@/components/Modal/Select/DogSelectModal";
import SortModal from "@/components/Modal/Select/SortModal";
import { useModalDispatch } from "@/provider/ModalsProvider";
import { useState } from "react";

const TestPage = () => {
  const { open, updateProps } = useModalDispatch();
  const [dogSelected, setDogSelected] = useState("");
  const [sort, setSort] = useState("");

  const dogSelectHandler = (text: string) => {
    setDogSelected(text);
    updateProps(DogSelectModal, { active: text });
  };

  const sortHandler = (text: string) => {
    setSort(text);
    updateProps(SortModal, { active: text });
  };

  return (
    <main className="bg-[#acf]">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        <Chip label="칩" active={"칩"} />
        <Chip label="칩칩" />
        <Chip label="칩칩칩" />
        <Chip label="칩칩칩칩" active={"칩칩칩칩"} />
        <Chip label="칩2" />
        <Chip label="칩칩2" />
        <Chip label="칩칩칩2" />
        <Chip label="칩칩칩칩2" />
      </div>

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

      <p>{dogSelected}</p>
      <Filter
        title="견종선택"
        active={dogSelected}
        Compoent={DogSelectModal}
        handler={dogSelectHandler}
      >
        견종
      </Filter>

      <p>{sort}</p>
      <Filter
        title="견종선택"
        active={sort}
        Compoent={SortModal}
        handler={sortHandler}
      >
        최신순
      </Filter>

      <button
        onClick={() => {
          open(CommentModal, {});
        }}
      >
        댓글 버튼
      </button>

      <BNB />
    </main>
  );
};

export default TestPage;
