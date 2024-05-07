import React from "react";

interface UpcommingInterviewProps {
  name: string;
  bg: string;
  date: string;
}

const UpcommingInterview: React.FC<UpcommingInterviewProps> = ({
  name,
  bg,
  date,
}) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div
        className={`w-12 h-12 rounded-lg bg-[#d6e5ee] flex flex-col items-center justify-center`}
      >
        <span className={`text-[#${date}] font-semibold text-xs`}>07</span>
        <span className={`text-[#${date}] text-xs`}>Feb</span>
      </div>
      <div className="flex justify-center flex-col gap-1 align-baseline">
        <h2 className="text-xs">Interview with Designer</h2>
        <p className="text-xs">
          Created by
          <span className="text-[#0b74ad] text-xs"> {name}</span>
        </p>
        <p className="text-xs">10 A.M to 11 A.M</p>
      </div>
      <div>
        <button className="text-sm text-white bg-[#0a66c2] p-2 rounded-md">
          Details
        </button>
      </div>
    </div>
  );
};

export default UpcommingInterview;
