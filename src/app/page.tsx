"use client";

import MeetingTable from "@/components/MeetingTable";
import AssessmentCard from "@/components/UI/AssessmentCard";
import Divider from "@/components/UI/Divider";
import WhiteCard from "@/components/UI/WhiteCard";
import { FaEllipsisVertical } from "react-icons/fa6";
// import { DateRangeCalendar } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import { DateRange } from "@mui/x-date-pickers-pro/models";
// import { StaticDateRangePicker } from "@mui/x-date-pickers-pro";
import UpcommingInterview from "@/components/UpcommingInterview";
import Activity from "@/components/Activity";
import user1 from "../../public/user-logo.png";
import user2 from "../../public/user-2.png";
import user3 from "../../public/user-3.png";
import HiringCandidates from "@/components/HiringCandidates";
import can1 from "../../public/can-1.jpeg";
import can2 from "../../public/can-2.jpeg";
import can3 from "../../public/can-3.jpeg";
import can4 from "../../public/can-4.jpeg";
import can5 from "../../public/can-5.jpeg";
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import PostedJobs from "@/components/PostedJobs";
import CandidateStatusTable from "@/components/CandidateStatusTable";
import { IoIosArrowDown } from "react-icons/io";
import ApplicationInfoBarChart from "@/components/ApplicationInfoBarChart";
import jhonsmith from "../../public/jhonSmith.jpeg";
import mariya from "../../public/Mariya.jpeg";
import { DateCalendar } from "@mui/x-date-pickers";
import python from "../../public/python.png";
import java from "../../public/java.png";
import Angular from "../../public/Angular.png";
import uiux from "../../public/ui.png";

export default function Home() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <main className="">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-semibold">HR Employee</h1>
            <span className="text-sm">
              Enjoy your selecting potential candidates Tracking and Management
              System.
            </span>
          </div>
          <div>
            <button className="bg-[#0a66c2] text-white px-6 py-3 text-sm rounded-md">
              Task Details
            </button>
          </div>
        </div>

        <div
          // className="grid grid-cols-3 gap-4 mt-10"
          className="w-full flex flex-col gap-4"
        >
          {/* Application INfo */}
          <div className="flex w-full gap-4 mt-10">
            <div className="flex item-center justify-start gap-4">
              <WhiteCard className={"min-w-[950px] h-[320px]"}>
                <div className="flex items-center justify-between px-6 pt-2">
                  <div className="flex items-center justify-start gap-12">
                    <h2 className="text-xl font-semibold">
                      Application’s Info
                    </h2>
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-5 h-5 bg-[#277acc] rounded-md" />
                      <span className="text-sm">Received</span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-5 h-5 bg-[#426281] rounded-md" />
                      <span className="text-sm">Processed</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-6">
                    <div className="bg-[#ffffff] drop-shadow-lg p-2 flex items-center justify-between gap-3 rounded-sm">
                      <span>Months</span>
                      <IoIosArrowDown className="w-6 h-6" color="#0a66c2" />
                    </div>
                  </div>
                </div>

                <Divider />
                <div className="px-4">
                  <ApplicationInfoBarChart />
                </div>
              </WhiteCard>
              <div className="w-full">
                <AssessmentCard />
              </div>
            </div>
          </div>

          {/* Today's Interview Meeting info */}

          <div className="w-full flex justify-start gap-4">
            {/* flex 1 */}
            <div className="flex flex-col gap-4">
              <WhiteCard className={"w-[1250px] h-[470px]"}>
                <div className="flex items-center justify-between px-8 pt-8">
                  <h2 className="text-xl font-semibold">
                    Today Interviews Meetings Info
                  </h2>
                  <div>
                    <FaEllipsisVertical />
                  </div>
                </div>

                <Divider />
                <div className="pt-4 px-8 mt-6">
                  <div className="flex items-center justify-start gap-6 overflow-auto custom-scrollbar">
                    <MeetingTable name="John Smith" userImage={jhonsmith} />
                    <MeetingTable name="Maria" userImage={mariya} />
                  </div>
                </div>
              </WhiteCard>

              {/* <div className="w-full"> */}
              <WhiteCard className={"w-[1250px] h-[500px]"}>
                <div className="flex items-center justify-between px-8 pt-6">
                  <div className="flex items-center justify-center gap-24">
                    <h2 className="text-xl font-semibold">Posted Jobs</h2>
                    <span className="underline text-[#0a66c2] font-semibold">
                      View All
                    </span>
                  </div>
                  <div className="flex items-center justify-end gap-6">
                    {/* <FaEllipsisVertical /> */}
                    <div className="bg-[#ffffff] drop-shadow-lg p-3 flex items-center justify-between rounded-md">
                      <input
                        type="text"
                        placeholder="Search"
                        className="focus:outline-none"
                      />
                      <CiSearch className="w-6 h-6" color="#6e6e6e" />
                    </div>
                    <div className="bg-[#ffffff] drop-shadow-lg p-3 flex items-center justify-between gap-3 rounded-md">
                      <IoFilter className="w-6 h-6" color="#0a66c2" />
                      <span className="font-semibold">Filters</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-start gap-24 pt-4 border-b-2 border-[#6e6e6e] mx-6">
                  <h2 className="text-xl">Active Jobs</h2>
                  <span className="text-xl">Pending Jobs</span>
                </div>

                {/* <Divider /> */}

                <div className="pt-4 px-8 mt-6 flex items-center justify-between">
                  <PostedJobs role={"Python Developers"} image={python} />
                  <PostedJobs role={"Angular Developers"} image={Angular} />
                  <PostedJobs role={"Java Developers"} image={java} />
                  <PostedJobs role={"UX|UI Designers"} image={uiux} />
                </div>
              </WhiteCard>

              <WhiteCard className={"w-[1250px] h-[600px]"}>
                <div className="flex items-center justify-between px-8 pt-6">
                  <div className="flex items-center justify-center gap-24">
                    <h2 className="text-xl font-semibold">Candidate Status</h2>
                    <span className="underline text-[#0a66c2] font-semibold">
                      View All
                    </span>
                  </div>
                  <div className="flex items-center justify-end gap-6">
                    {/* <FaEllipsisVertical /> */}
                    <div className="bg-[#ffffff] drop-shadow-lg p-3 flex items-center justify-between rounded-md">
                      <input
                        type="text"
                        placeholder="Search"
                        className="focus:outline-none"
                      />
                      <CiSearch className="w-6 h-6" color="#6e6e6e" />
                    </div>
                    <div className="bg-[#ffffff] drop-shadow-lg p-3 flex items-center justify-between gap-3 rounded-md">
                      <IoFilter className="w-6 h-6" color="#0a66c2" />
                      <span className="font-semibold">Filters</span>
                    </div>
                  </div>
                </div>

                {/* <Divider /> */}

                <div className="pt-4 px-8 mt-6 flex items-center justify-between">
                  <CandidateStatusTable />
                </div>
              </WhiteCard>
              {/* </div> */}
            </div>

            {/* flex 2 */}
            <div className="w-[300px]">
              <div className="bg-[#ffffff] rounded-lg drop-shadow-lg flex items-center justify-center">
                <DateCalendar />
              </div>

              <div className="w-full mt-12">
                <div className="flex w-full items-center justify-between">
                  <h1 className="text-xl">Upcomings</h1>
                  <span className="underline text-[#0a66c2] font-semibold">
                    View All
                  </span>
                </div>

                <div className="mt-6 flex flex-col gap-10">
                  <UpcommingInterview
                    name={"Stella"}
                    bg="#d6e5ee"
                    date="0b74ad"
                  />
                  <UpcommingInterview
                    name={"Stephan"}
                    bg="#c0c1c1"
                    date="091316"
                  />
                  <UpcommingInterview
                    name={"Stella"}
                    bg="#e1e1e1"
                    date="091316"
                  />
                </div>
              </div>

              <div className="w-full mt-12">
                <div className="flex w-full items-center justify-between">
                  <h1 className="text-xl">Activity</h1>
                  <span className="underline text-[#0a66c2] font-semibold">
                    View All
                  </span>
                </div>

                <div className="mt-6 flex flex-col gap-10">
                  <Activity userImage={user1} />
                  <Activity userImage={user2} />
                  <Activity userImage={user3} />
                </div>
              </div>

              <div className="w-full mt-12">
                <div className="flex w-full items-center justify-between">
                  <h1 className="text-xl">Hiring Candidates</h1>
                  <span className="underline text-[#0a66c2] font-semibold">
                    View All
                  </span>
                </div>

                <div className="mt-6 flex flex-col gap-10">
                  <HiringCandidates userImage={can1} />
                  <HiringCandidates userImage={can2} />
                  <HiringCandidates userImage={can3} />
                  <HiringCandidates userImage={can4} />
                  <HiringCandidates userImage={can5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LocalizationProvider>
  );
}
