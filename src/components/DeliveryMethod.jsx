import React from "react";

const DeliveryMethod = () => {
  return (
    <div className=" bg-white px-5 py-5 mt-5 shadow rounded lg:w-[50%]">
      <div className=" flex items-center gap-3 border-b pb-3">
        <span className=" bg-[#FEECEB] text-[#F44336] w-7 text-center font-bold rounded-full">
          3
        </span>
        <h2 className=" text-lg font-bold capitalize">delivery method</h2>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className=" mb-2 capitalize font-semibold text-sm mt-1">
          select a delivery method
        </h3>
        <div className=" flex items-center gap-3">
          <input type="radio" name="cash" id="cash" className=" w-4 h-4" />
          <label htmlFor="payment" className=" capitalize font-medium text-sm">
            Home Delivery - 60৳
          </label>
        </div>
        <div className=" flex items-center gap-3">
          <input type="radio" name="cash" id="cash" className=" w-4 h-4" />
          <label htmlFor="payment" className=" capitalize font-medium text-sm">
            Store Pickup - 0৳
          </label>
        </div>
        <div className=" flex items-center gap-3">
          <input type="radio" name="cash" id="cash" className=" w-4 h-4" />
          <label htmlFor="payment" className=" capitalize font-medium text-sm">
            Request Express - Charge Applicable
          </label>
        </div>
      </div>
    </div>
  );
};

export default DeliveryMethod;
