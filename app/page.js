"use client";
import Background from "@/Components/Background";
import Card from "@/Components/Card";
import Foreground from "@/Components/Foreground";
import React, { useRef } from "react";

const page = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-800 z-3">
      <Background />
      {/* <Foreground /> */}
    </div>
  );
};

export default page;
