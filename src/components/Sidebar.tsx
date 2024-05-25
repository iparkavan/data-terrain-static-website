import React from "react";
import { GrAppsRounded } from "react-icons/gr";
import { CiBoxList } from "react-icons/ci";
import { RiCustomerServiceLine } from "react-icons/ri";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiContactsBook3Line } from "react-icons/ri";
import { PiHandshake } from "react-icons/pi";
import { GrDocumentConfig } from "react-icons/gr";
import { AiOutlineControl } from "react-icons/ai";
import { LuFileSearch } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className="fixed left-0 w-24 z-10 top-32 h-screen p-4 bg-[#ffffff] drop-shadow-lg rounded-tr-[30px]">
      <div className="w-full flex flex-col items-center justify-center gap-12">
        <GrAppsRounded className="w-6 h-6" color="#0a66c2" />
        <GrDocumentConfig className="w-6 h-6" color="#091316" />
        <RiContactsBook3Line className="w-6 h-6" color="#091316" />
        <LuFileSearch className="w-6 h-6" color="#091316" />
        <MdOutlineWorkOutline className="w-6 h-6" color="#091316" />
        <CiBoxList className="w-6 h-6" color="#091316" />
        <PiHandshake className="w-6 h-6" color="#091316" />
        <RiCustomerServiceLine className="w-6 h-6" color="#091316" />
        <AiOutlineControl className="w-6 h-6" color="#091316" />
      </div>
    </div>
  );
};

export default Sidebar;
