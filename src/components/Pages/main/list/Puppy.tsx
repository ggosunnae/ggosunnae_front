"use client";

import React, { useState } from "react";

import CardNormal from "@/components/Carousel/CardNormal";
import PuppyFilter from "@/components/Layout/PuppyFilter";

import MasonryLayout from "./MansoryLayout";

const Puppy = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <>
      <CardNormal />
      <PuppyFilter onInfoToggle={handleToggle} />
      <MasonryLayout isChecked={isChecked} />
    </>
  );
};

export default Puppy;
