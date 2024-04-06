import React from "react";

const ApplyPoints = () => {
  return (
    <div className=" mt-5 px-4 py-5 bg-white shadow rounded">
      <div>
        <h2 className=" text-lg font-bold capitalize border-b pb-3">
          user star points
        </h2>
        <div className=" flex justify-between items-center gap-3 mt-4">
          <input
            type="text"
            id="points"
            name="points"
            placeholder="points to use (max 0)"
            className=" border w-full px-3 py-2.5 rounded text-sm"
          />
          <div className="">
            <button className="min-w-[120px] px-3 py-2.5 border-2 border-[#3749bb] capitalize relative rounded group overflow-hidden font-bold bg-purple-50 text-[#3749bb] text-sm  inline-block">
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#3749bb] group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">
                apply points
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyPoints;
