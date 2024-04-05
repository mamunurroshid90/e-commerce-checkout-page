import React from "react";

const ConfirmOrder = () => {
  return (
    <div className=" mt-8">
      <div className=" flex flex-col gap-4">
        <div className=" flex gap-3">
          <input
            type="checkbox"
            name="condition"
            id="condition"
            className=" w-6 h-6"
          />
          <p className=" text-sm font-semibold">
            I have read and agree to the{" "}
            <span className=" text-[#ef4a23] capitalize">
              terms <span className=" lowercase"> and </span> conditions
            </span>
            ,<span className=" text-[#ef4a23] capitalize">privacy policy</span>
            <span className=" lowercase"> and </span>
            <span className=" text-[#ef4a23] capitalize">
              refund <span className=" lowercase"> and </span> return policy
            </span>
          </p>
        </div>
        <div>
          <button className=" bg-[#3749bb] w-full rounded capitalize text-white font-bold px-2 py-2">
            confirm order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
