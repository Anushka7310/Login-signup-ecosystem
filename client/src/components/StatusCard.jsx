import React from "react";
const StatusCard = ({ name, status, logo }) => {
  return (
    <div className="shadow-xl mt-1 flex items-center justify-between w-full bg-[#FFF5E5] rounded-[15px] border-[1px]">
      <div className="flex flex-col items-start p-4">
        <h3 className="text-[18px] font-[700] text-[#242331] letter-[5%] leading-[24.55px]">
          {name}
        </h3>
        <p className="mt-1 text-[14px] font-[700] text-[#797979] letter-[5%] leading-[19.1px]">
          Status: {status}
        </p>
      </div>
      <div className="flex items-center">
        <div className="mr-3 w-[50px] bg-white h-[50px] items-center flex rounded-lg p-1">
          <img src={logo} />
        </div>
        <div className="mr-3">
          <div className="rounded-full w-[6px] h-[6px] bg-[#2423313B]"></div>
          <div className="rounded-full w-[6px] h-[6px] bg-[#2423313B] mt-2"></div>
          <div className="rounded-full w-[6px] h-[6px] bg-[#2423313B] mt-2"></div>
        </div>
      </div>
    </div>
  );
};
export default StatusCard;
