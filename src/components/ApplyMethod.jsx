import React from "react";

const ApplyMethod = () => {
  return (
    <div className=" bg-white mt-5 px-4 py-5 shadow rounded flex flex-col gap-7 lg:grid lg:grid-cols-2">
      <div className=" flex flex-col gap-3 lg:grid lg:grid-cols-3">
        <input
          type="text"
          id="voucher"
          name="voucher"
          placeholder="gift voucher"
          className=" border border-[#ddd] rounded px-2 py-3 capitalize text-sm font-bold lg:col-span-2"
        />
        <button className=" border-2 border-[#3749bb] text-[#3749bb] font-semibold capitalize px-2 py-3 rounded">
          apply voucher
        </button>
      </div>
      <div className=" flex flex-col gap-3 lg:grid lg:grid-cols-3">
        <input
          type="text"
          id="voucher"
          name="voucher"
          placeholder="promo / coupon code"
          className=" border border-[#ddd] rounded px-2 py-3 capitalize text-sm font-bold lg:col-span-2"
        />
        <button className=" border-2 border-[#3749bb] text-[#3749bb] font-semibold capitalize px-2 py-3 rounded">
          apply coupon
        </button>
      </div>
    </div>
  );
};

export default ApplyMethod;
