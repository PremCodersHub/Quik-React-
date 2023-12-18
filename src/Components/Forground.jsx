import React, { useRef, useState } from "react";
import Card from "./Card";
import { FaSearch } from "react-icons/fa";

export const Forground = () => {

  const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor, sit ametg elit.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagtitle: "Downlode now", tagColor: "green" },
    },
    {
      desc: "Lorem Lorem ipsum dolor sit amet consectetur adipipsum dolor, sit ametg elit.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagtitle: "Downlode now", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, praesentium.. Voluptatum?.",
      filesize: ".2mb",
      close: false,
      tag: { isOpen: true, tagtitle: "Uplode", tagColor: "green" },
    },
  ];
  return (
    <>
      <div ref= {ref} className="w-full h-full fixed z-[4] top-0 left-0 flex gap-5">
        {data.map((item,index)=>(
          <Card data={item} refrence = {ref}/>
        ))}
      </div>
    </>
  );
};

