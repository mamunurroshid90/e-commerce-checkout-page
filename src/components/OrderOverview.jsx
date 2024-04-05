import React from "react";

const OrderOverview = () => {
  return (
    <div className=" bg-white px-5 py-5 mt-5">
      <div className=" flex items-center gap-3 border-b pb-3">
        <span className=" bg-[#FEECEB] text-[#F44336] w-7 text-center font-bold rounded-full">
          4
        </span>
        <h2 className=" text-lg font-bold capitalize">order overview</h2>
      </div>
      <table className=" table-auto w-full">
        <thead className=" bg-[#F5F7F9] text-[#666666] capitalize font-medium rounded">
          <tr className=" py-3">
            <th className=" py-3 pl-2 text-start text-xs">product name</th>
            <th className="py-3 pl-2 text-start text-xs">price</th>
            <th className="py-3 pr-2 text-end text-xs">total</th>
          </tr>
        </thead>
        <tbody>
          <tr className=" border-b pb-3">
            <td className=" text-sm font-medium text-[#111] leading-tight ">
              AMD Ryzen 5 5600G Budget Gaming Desktop PC
              <p className=" text-xs text-[#666] my-2 capitalize">
                star points: 220
              </p>
            </td>
            <td className=" text-sm text-[#111] font-medium">30,700৳ x 1</td>
            <td className=" text-sm text-[#111] font-medium text-end">
              30,700৳
            </td>
          </tr>
          <tr className=" border-b">
            <td className=""></td>
            <td className=" text-sm font-medium text-[#111] capitalize">
              sub-total
            </td>
            <td className=" text-sm font-medium text-[#ef4a23] capitalize text-end">
              30,700৳
            </td>
          </tr>
          <tr className=" border-b">
            <td className=""></td>
            <td className="text-sm font-medium text-[#111] capitalize">
              home delivery
            </td>
            <td className="text-sm font-medium text-[#ef4a23] capitalize text-end">
              60৳
            </td>
          </tr>
          <tr>
            <td className=""></td>
            <td className="text-sm font-medium text-[#111] capitalize">
              total
            </td>
            <td className="text-sm font-medium text-[#ef4a23] capitalize text-end">
              30,760৳
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderOverview;
