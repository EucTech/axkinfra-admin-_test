import { Montserrat } from "next/font/google";
import React from "react";
import { GoArrowUp } from "react-icons/go";
import { IoMdArrowUp } from "react-icons/io";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const UserStats = () => {
  const UserStats = [
    {
      title: "Total Users",
      icon: <IoMdArrowUp className="text-[#11C308] text-[22px] " />,
      bgColor: "#D9FFD7",
      value: "1,234",
      percentage: "15%",
      vsLastMonth: "150",
    },
    {
      title: "Active Users",
      icon: <IoMdArrowUp className="text-[#049FA7] text-[22px] " />,
      bgColor: "#D7FDFF",
      value: "987",
      percentage: "10%",
      vsLastMonth: "90",
    },
    {
      title: "New Users",
      icon: <IoMdArrowUp className="text-[#C98810] text-[22px] " />,
      bgColor: "#F4E3C4",
      value: "345",
      percentage: "20%",
      vsLastMonth: "60",
    },
  ];
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
      {UserStats.map((stat, index) => (
        <div
        key={index}
        className="w-full h-[163px] flex flex-col items-start justify-center rounded-xl bg-[#ffffff] px-5">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="size-10 flex items-center justify-center rounded-[800px]" style={{ backgroundColor: stat.bgColor }}>
                {stat.icon}
              </div>
              <p className="text-[12px] font-medium text-[#525252]">
                {stat.title}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <h3
                className={` text-[#353535] text-[24px] font-medium ${montserrat.className}`}
              >
                {stat.value}
              </h3>
              <div className="flex items-center text-[#0A7D00]">
                <GoArrowUp className="w-3" />
                <p className="text-[12px] font-medium">{stat.percentage}</p>
              </div>
            </div>

            <div className={`flex items-center gap-1 ${montserrat.className}`}>
              <p className="text-[#7B7B7B] text-[11px] font-medium">
                Vs last month:{" "}
              </p>
              <span className="text-[#3A3A3A] text-[11px] font-medium">{stat.vsLastMonth}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserStats;
