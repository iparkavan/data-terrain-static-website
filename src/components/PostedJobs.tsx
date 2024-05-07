import React from "react";
import WhiteCard from "./UI/WhiteCard";
import { FaEllipsisVertical } from "react-icons/fa6";
import path from "path";
import Image, { StaticImageData } from "next/image";
import Angular from "../../public/Angular.png";
import { FaArrowUpLong } from "react-icons/fa6";

interface PostedJobsProps {
  image: StaticImageData;
  role: string;
}

const PostedJobs: React.FC<PostedJobsProps> = ({ role, image }) => {
  return (
    <div className="w-[260px] h-[300px] bg-[#ffffff] drop-shadow-lg">
      <div className="flex items-center justify-between p-2 m-2 border-b-2 border-[#d6d6d6]">
        <div className="flex items-center justify-start gap-1">
          <Image
            src={image}
            // fill
            width={25}
            height={25}
            alt="Angular"
          />
          <h2 className="text-sm">{role}</h2>
        </div>
        <div>
          <FaEllipsisVertical />
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 mt-6">
        <div className="text-xs">Senior Developers</div>
        <div
          className={`text-2xl font-bold p-4 bg-[#d9e4ef] rounded-lg text-[#0a66c2]`}
        >
          258
        </div>
        <div className="text-xs">Total Applicants</div>
      </div>

      <div className="flex items-center justify-between border-t-2 bottom-0 left-0 right-0 fixed w-full px-2 py-3 border-[#d6d6d6]">
        <div className="flex items-center justify-start gap-2 text-xs">
          <span className="flex items-center justify-start gap-1 text-[#0a66c2]">
            <FaArrowUpLong />
            28%
          </span>{" "}
          vs Last Month
        </div>
        <div className="text-xs">6 mins ago</div>
      </div>
    </div>
  );
};

export default PostedJobs;
