import React from "react";

const Form = () => {
  return (
    <div className="bg-white px-5 my-5 shadow rounded pt-4 pb-9">
      <div className=" flex items-center gap-3 border-b pb-3">
        <span className=" bg-[#FEECEB] text-[#F44336] w-7 text-center font-bold rounded-full">
          1
        </span>
        <h2 className=" text-xl font-semibold capitalize">
          customer information
        </h2>
      </div>
      <form action="">
        <div className=" flex flex-col gap-1 mt-2">
          <label htmlFor="" className=" capitalize font-semibold text-sm">
            first name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="first name*"
            className=" w-full px-4 py-2 border rounded capitalize text-sm"
          />
        </div>
        <div className=" flex flex-col gap-1 mt-4">
          <label htmlFor="" className=" capitalize font-semibold text-sm">
            last name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="last name*"
            className=" w-full px-4 py-2 border rounded capitalize text-sm"
          />
        </div>
        <div className=" flex flex-col gap-1 mt-4">
          <label htmlFor="" className=" capitalize font-semibold text-sm">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email*"
            className=" w-full px-4 py-2 border rounded capitalize text-sm"
          />
        </div>
        <div className=" flex flex-col gap-1 mt-4">
          <label htmlFor="" className=" capitalize font-semibold text-sm">
            address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="address*"
            className=" w-full px-4 py-2 border rounded capitalize text-sm"
          />
        </div>
        <div className=" flex flex-col gap-1 mt-4">
          <label htmlFor="" className=" capitalize font-semibold text-sm">
            mobile
          </label>
          <input
            type="number"
            id="mobile"
            name="mobile"
            placeholder="telephone*"
            className=" w-full px-4 py-2 border rounded capitalize text-sm"
          />
        </div>
        <div className=" flex flex-col gap-1 mt-4">
          <label htmlFor="" className=" capitalize font-semibold text-sm">
            city
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="city*"
            className=" w-full px-4 py-2 border rounded capitalize text-sm"
          />
        </div>
        <div className=" flex flex-col gap-1 mt-4">
          <label htmlFor="" className=" capitalize font-semibold text-sm">
            zone
          </label>
          <input
            type="text"
            id="zone"
            name="zone"
            placeholder="Dhaka city*"
            className=" w-full px-4 py-2 border rounded capitalize text-sm"
          />
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <label htmlFor="" className=" capitalize font-semibold text-sm">
            comment
          </label>
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="4"
            className="w-full px-4 py-2 border rounded capitalize text-sm"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Form;
