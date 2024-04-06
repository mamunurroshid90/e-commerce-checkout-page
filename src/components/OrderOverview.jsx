import React from "react";

const OrderOverview = () => {
  return (
    <div className="bg-white px-5 py-5 mt-5 shadow rounded">
      <div className="flex items-center gap-3 border-b pb-4">
        <span className="bg-[#FEECEB] text-[#F44336] w-7 text-center font-bold rounded-full">
          4
        </span>
        <h2 className="text-lg font-bold capitalize">order overview</h2>
      </div>
      <table className="w-full">
        <tr className="border-b bg-[#F5F7F9] text-xs font-semibold capitalize text-[#666666]">
          <th className="py-4 text-start pl-3">product name</th>
          <th className="text-start pl-2 ">price</th>
          <th className="text-end pr-4">total</th>
        </tr>
        <tr className="border-b text-sm">
          <td className="capitalize font-semibold">
            AMD Ryzen 5 5600G Budget Gaming Desktop PC
          </td>
          <td className="text-start font-semibold"> 30,700৳ x 1</td>
          <td className="text-end pr-4 py-3 font-semibold">30,700৳</td>
        </tr>
        <tr className="border-b text-sm">
          <td></td>
          <td className="text-end pr-5 lg:pr-12 capitalize font-bold">
            Sub-Total:
          </td>
          <td className="text-end pr-4 py-3 font-semibold text-[#F54336]">
            30,700৳
          </td>
        </tr>
        <tr className="border-b text-sm">
          <td></td>
          <td className="text-end pr-5 lg:pr-12 capitalize font-bold">
            Home Delivery:
          </td>
          <td className="text-end pr-4 py-3 text-[#F54336] font-semibold">
            60৳
          </td>
        </tr>
        <tr className="border-b text-sm">
          <td></td>
          <td className="text-end pr-5 lg:pr-12 capitalize font-bold">
            Total:
          </td>
          <td className="text-end pr-4 py-3 text-[#F54336] font-semibold">
            30,760৳
          </td>
        </tr>
      </table>
    </div>
  );
};

export default OrderOverview;
