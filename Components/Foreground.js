"use client";
import React, { useRef, useState } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef();
  const data = [
    {
      desc: "Everyone knows that paper is made from trees. looks so what are you wating for",
      filesize: ".4M",
      close: 0,
      tag: { isopen: 1, tagTitle: "Download Now", tagColour: "sky" },
    },
    {
      desc: "It sounds like a dream job. But, even writing greeting card messages can be a challenge.",
      filesize: ".7M",
      close: 1,
      tag: { isopen: 0, tagTitle: "Download Now", tagColour: "sky" },
    },
    {
      desc: "Knowing how to write good greeting card messages is a skill.",
      filesize: ".9M",
      close: 0,
      tag: { isopen: 1, tagTitle: "Download Now", tagColour: "sky" },
    },
  ];

  return (
    <>
      <div
        ref={ref}
        className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap  p-5 "
      >
        {data.map((elem, i) => (
          <Card data={elem} reference={ref} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
