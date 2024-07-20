"use client";
import BNB from "@/components/Common/BNB";
import Chip from "@/components/Common/Chip";
import Complete from "@/components/Common/Complete/Bottom";
import Top from "@/components/Common/Complete/Top";
import Filter from "@/components/Common/Filter";
import Input from "@/components/Common/Input/Input";
import Select from "@/components/Common/Input/Select";
import SelectModal from "@/components/Modal/SelectModal";
import { Dispatch, SetStateAction, useState } from "react";

const Li = ({ setClick }: { setClick: Dispatch<SetStateAction<string>> }) => {
  return (
    <>
      {[
        { key: "key1", name: "name" },
        { key: "key2", name: "name2" },
      ].map((depth) => (
        <li
          key={depth.key}
          className={`flex h-[42px] w-full flex-none cursor-pointer items-center rounded-[10px] bg-grayscale-gray4 px-4 text-left leading-6 tracking-25`}
          onClick={() => setClick(depth.name)}
        >
          {depth.name}
        </li>
      ))}
    </>
  );
};

const Li2 = ({
  setClick2,
}: {
  setClick2: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <>
      {[
        { key: "key1", name: "name" },
        { key: "key2", name: "name2" },
      ].map((depth) => (
        <li
          key={depth.key}
          className={`flex h-[42px] w-full flex-none cursor-pointer items-center rounded-[10px] bg-grayscale-gray4 px-4 text-left leading-6 tracking-25`}
          onClick={() => setClick2(depth.name)}
        >
          {depth.name}
        </li>
      ))}
    </>
  );
};

const TestPage = () => {
  const [click, setClick] = useState("");
  const [click2, setClick2] = useState("");

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

      <p>{click}</p>
      <Filter title="견종선택" Content={() => <Li setClick={setClick} />}>
        견종
      </Filter>

      <p>{click2}</p>
      <Filter title="순서선택" Content={() => <Li2 setClick2={setClick2} />}>
        최신순
      </Filter>
    </main>
  );
};

export default TestPage;
