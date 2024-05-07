import Image from "next/image";
import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { MdAccessTime } from "react-icons/md";

interface MeetingTableProps {
  name: string;
  userImage: string;
}

const MeetingTable: React.FC<MeetingTableProps> = ({ name, userImage }) => {
  return (
    <div className="grid grid-cols-3 min-w-[700px] rounded-md h-[290px] border-2 border-[#d6d6d6] mb-6 p-1">
      <div className="grid grid-rows-4 border-r-2 border-[#d6d6d6]">
        <div className="row-span-3 flex flex-col items-center text-center gap-1 mt-6">
          <div className="w-24 h-24 relative rounded-full border-2 border-[#0a66c2]">
            <Image
              src={userImage}
              alt="userimage"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <h2 className="text-xs mt-4">{name}</h2>
          <span className="text-xs mt-1">Senior Python Developer</span>
        </div>
        <div className="grid grid-cols-2 border-t-2 border-[#d6d6d6] m-1">
          <div className="col-span-1 border-r-2 mt-2 border-[#d6d6d6] flex flex-col items-center justify-center gap-1">
            <BsCalendarDate className="w-6 h-6" color="#0a66c2" />
            <span className="text-xs text-[#0a66c2]">19th Feb 2024</span>
          </div>
          <div className="col-span-1 mt-2 flex flex-col items-center justify-center gap-1">
            <MdAccessTime className="w-6 h-6" color="#0a66c2" />
            <span className="text-xs text-[#0a66c2]">10:30 A.M</span>
          </div>
        </div>
      </div>

      <div className="col-span-2 grid grid-rows-6">
        <div className="row-span-4 grid grid-cols-2">
          <div className="grid grid-row-4 border-r border-[#d6d6d6]">
            <div className="row-span-1 border-b-2 border-[#d6d6d6] ml-1 flex items-center justify-center self-end text-xs">
              1st Level: 7/10
            </div>
            <div className="row-span-1 border-b-2 border-[#d6d6d6] ml-1 flex items-center justify-center self-end text-xs">
              2nd Level: 6/10
            </div>
            <div className="row-span-1 border-b-2 border-[#d6d6d6] ml-1 flex items-center justify-center self-end text-xs">
              3rd Level: Waiting
            </div>
            <div className="row-span-1 border-b-2 border-[#d6d6d6] ml-1 flex items-center justify-center self-end text-xs">
              Meet Via: G-Meet
            </div>
          </div>
          <div className="grid grid-rows-4 border-l border-[#d6d6d6]">
            <div className="row-span-1 border-b-2 border-[#d6d6d6] flex items-center justify-center self-end text-xs">
              Interviewer: Stella
            </div>
            <div className="row-span-1 border-b-2 border-[#d6d6d6] flex items-center justify-center self-end text-xs">
              Interviewer: Smith
            </div>
            <div className="row-span-1 border-b-2 border-[#d6d6d6] flex items-center justify-center self-end text-xs">
              Interviewer:{" "}
              <span className="text-xs text-[#0e73d3]"> Stephan</span>
            </div>
            <div className="row-span-1 mr-1 border-b-2 border-[#d6d6d6] flex items-center justify-center self-end text-xs">
              Attendees: Johnson
            </div>
          </div>
        </div>

        <div className="row-span-2 flex items-center justify-center gap-6">
          <button className="w-[200px] self-center rounded-md border text-[#0a66c2] border-[#0a66c2] p-2">
            Reschedule Meeting
          </button>
          <button className="bg-[#0a66c2] self-center rounded-md p-2 text-white w-[200px]">
            Join Meeting
          </button>
        </div>
      </div>

      {/* <div className="grid grid-rows-6">
        <div className="row-span-1 border-b-2 border-r-2 border-[#d6d6d6]"></div>
        <div className="row-span-1 border-b-2 border-r-2 border-[#d6d6d6]"></div>
        <div className="row-span-1 border-b-2 border-r-2 border-[#d6d6d6]"></div>
        <div className="row-span-1 border-b-2 border-r-2 border-[#d6d6d6]"></div>
      </div>

      <div className="grid grid-rows-6 ">
        <div className="row-span-1 border-b-2 border-[#d6d6d6] mr-1"></div>
        <div className="row-span-1 border-b-2 border-[#d6d6d6] mr-1"></div>
        <div className="row-span-1 border-b-2 border-[#d6d6d6] mr-1"></div>
        <div className="row-span-1 border-b-2 border-[#d6d6d6] mr-1"></div>
      </div> */}
    </div>
  );
};

export default MeetingTable;
