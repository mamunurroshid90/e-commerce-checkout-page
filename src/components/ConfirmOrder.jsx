import React from "react";

const ConfirmOrder = () => {
  return (
    <div className=" mt-8">
      <div className=" flex flex-col gap-4 md:flex md:flex-row md:justify-between">
        <div className=" flex gap-3">
          <input
            type="checkbox"
            name="condition"
            id="condition"
            className="w-6 h-6 md:w-3.5"
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
          <button
            type="submit"
            className=" w-full md:w-[140px] px-5 py-2.5 lg:px-5 lg:py-2.5 border-2 border-[#3749bb] capitalize relative rounded group overflow-hidden font-bold bg-[#3749bb] text-white text-sm  inline-block"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#3749bb] group-hover:h-full opacity-90 group-hover:bg-[#4237bb]"></span>
            <span className="relative group-hover:text-white">
              confirm order
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
