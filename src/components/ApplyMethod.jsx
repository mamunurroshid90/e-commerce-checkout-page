import React from "react";

const ApplyMethod = () => {
  return (
    <div className=" bg-white mt-5 px-4 py-5 shadow rounded flex flex-col gap-7 md:grid md:grid-cols-2">
      <div className=" flex flex-col gap-3 lg:flex lg:flex-col lg:gap-3 xl:grid xl:grid-cols-3">
        <input
          type="text"
          id="voucher"
          name="voucher"
          placeholder="gift voucher"
          className=" border border-[#ddd] w-full rounded px-2 py-2.5 capitalize text-sm font-bold md:col-span-2"
        />
        <div>
          <button className=" w-full md:min-w-[130px] px-3 py-2.5 border-2 border-[#3749bb] capitalize relative rounded group overflow-hidden font-bold bg-purple-50 text-[#3749bb] text-sm  inline-block">
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#3749bb] group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">
              apply voucher
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 lg:flex lg:flex-col gap-3 xl:grid xl:grid-cols-3">
        <input
          type="text"
          id="voucher"
          name="voucher"
          placeholder="promo / coupon code"
          className=" border border-[#ddd] w-full rounded px-2 py-2.5 capitalize text-sm font-bold md:col-span-2"
        />
        <div>
          <button className=" w-full md:min-w-[130px] px-3 py-2.5 border-2 border-[#3749bb] capitalize relative rounded group overflow-hidden font-bold bg-purple-50 text-[#3749bb] text-sm  inline-block">
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#3749bb] group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">
              apply coupon
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyMethod;
