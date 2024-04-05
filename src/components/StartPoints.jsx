import React from "react";

import { MdStars } from "react-icons/md";

const StartPoints = () => {
  return (
    <div className=" bg-white mt-5 px-5 pt-5 pb-4 shadow flex flex-col gap-4 rounded text-center lg:py-8 lg:flex lg:flex-row lg:justify-between lg:items-center">
      <div className=" lg:text-start">
        <h3 className=" capitalize text-xl font-semibold">star point</h3>
        <p className=" text-base font-medium">
          <span className=" capitalize">earn star points</span> and use on your
          next order
        </p>
      </div>
      <div className="">
        <div className="flex justify-center items-center gap-3 bg-[#FEF4F4] rounded-full py-4 lg:px-5 lg:py-4">
          <span>
            <MdStars className=" text-[#EF4A23] text-4xl" />
          </span>
          <span className=" flex items-center gap-2">
            <span className=" text-2xl font-bold">220</span>{" "}
            <span className=" capitalize font-medium">start points</span>
          </span>
        </div>
      </div>
      <div>
        <button className=" border-none rounded px-4 py-2 text-white font-medium bg-[#2C3A96]">
          <span className=" capitalize">login</span> to{" "}
          <span className=" capitalize">avail</span>
        </button>
      </div>
    </div>
  );
};

export default StartPoints;
