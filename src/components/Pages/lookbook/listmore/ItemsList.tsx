"use client";

import { useSearchParams } from "next/navigation";

import OotdList from "@/components/Pages/lookbook/listmore/OotdList";
import PointList from "@/components/Pages/lookbook/listmore/PointList";
import SizeList from "@/components/Pages/lookbook/listmore/SizeList";

function ItemsList() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  return (
    <>
      {type === "ootd" && <OotdList />}
      {type === "size" && <SizeList />}
      {type === "point" && <PointList />}
    </>
  );
}

export default ItemsList;
