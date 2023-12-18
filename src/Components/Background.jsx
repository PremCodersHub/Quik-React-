import React from "react";

export const Background = () => {
  return (
    <>
      <div className="fixed z-[3] w-full h-screen">
        <div className="w-full absolute top-3 flex justify-center p-10 text-zinc-500 font-semibold text-2xl">
          Documents
        </div>
        <h1 className="text-[13vw] leading-none tracking-tighter absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900">
          Docs.
        </h1>
      </div>
    </>
  );
};
