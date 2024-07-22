"use client";

import React, { useEffect, useState } from "react";

import AppBar from "@/components/Common/AppBar";
import Nav from "@/components/Layout/Nav";
import PopularPuppy from "@/components/Pages/main/details/PopularPuppy";
import Puppy from "@/components/Pages/main/details/Puppy";

interface Data {
  detailType: "puppydetail" | "populardetail";
}

// 임시 데이터 가져오기 함수
const getData = async (): Promise<Data> => {
  return { detailType: "puppydetail" };
};

export default function Page() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData: Data = await getData();
      setData(fetchedData);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>; // 데이터 로딩 중 표시할 UI
  }

  return (
    <>
      {data.detailType === "puppydetail" && (
        <>
          <AppBar type="monthlyPick" title="꼬순내" showCompleteButton={false} />
          <div className="bg-white">
            <main className="no-scrollbar h-[calc(100vh-100px)] overflow-y-scroll pb-[80px]">
              <Puppy />
            </main>
            <Nav />
          </div>
        </>
      )}
      {data.detailType === "populardetail" && (
        <>
          <AppBar type="monthlyPick" title="인기댕" showCompleteButton={false} />
          <div className="bg-white">
            <main className="no-scrollbar h-[calc(100vh-100px)] overflow-y-scroll">
              <PopularPuppy />
            </main>
            <Nav />
          </div>
        </>
      )}
    </>
  );
}
