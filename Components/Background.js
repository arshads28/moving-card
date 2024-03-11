import React from "react";
import Foreground from "./Foreground";
Foreground;
const Background = () => {
  return (
    <>
      <div className=" fixed w-full h-screen">
        <div className=" absolute top-7 w-full py-10 text-zinc-500 flex justify-center bg-slate-900 ">
          Documents
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold  text-zinc-900 ">
          Docs.
        </h1>
        <Foreground />
      </div>
    </>
  );
};

export default Background;
