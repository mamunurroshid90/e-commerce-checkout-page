import React from "react";

const PaymentMethod = () => {
  return (
    <div className=" bg-white px-5 py-5 mt-5 shadow rounded lg:w-[50%]">
      <div className=" flex items-center gap-3 border-b pb-3">
        <span className=" bg-[#FEECEB] text-[#F44336] w-7 text-center font-bold rounded-full">
          2
        </span>
        <h2 className=" text-lg font-bold capitalize">payment method</h2>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className=" mb-2 capitalize font-semibold text-sm mt-1">
          select a payment method
        </h3>
        <div className=" flex items-center gap-3">
          <input type="radio" name="cash" id="cash" className=" w-4 h-4" />
          <label htmlFor="payment" className=" capitalize font-medium text-sm">
            cash <span className=" lowercase">on</span> delivery
          </label>
        </div>
        <div className=" flex items-center gap-3">
          <input type="radio" name="cash" id="cash" className=" w-4 h-4" />
          <label htmlFor="payment" className=" capitalize font-medium text-sm">
            online <span className=" lowercase"></span> payment
          </label>
        </div>
        <div className=" flex items-center gap-3">
          <input type="radio" name="cash" id="cash" className=" w-4 h-4" />
          <label htmlFor="payment" className=" capitalize font-medium text-sm">
            POS <span className=" lowercase">on</span> delivery
          </label>
        </div>
      </div>
      <div className=" mt-4">
        <p className=" capitalize font-semibold text-sm">we accept</p>
        <div className=" w-full mt-4">
          <img
            className=" w-full"
            src="https://www.startech.com.bd/catalog/view/theme/starship/images/payment-methods.png"
            alt="payment-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
