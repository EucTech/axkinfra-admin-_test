"use client";
import { ShipmentData } from "@/utilities/DummyData";
import Image from "next/image";
import React from "react";
import { MdOutlineAlarm } from "react-icons/md";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Divider } from "@mui/material";

const ShipmentInfo = () => {
  const deliveryStatus = (status: string) => {
    const statusClasses: Record<string, string> = {
      "In-Transit": "text-[#CB854B] bg-[#FFEAD9]",
      Pending: "text-[#11BB16] bg-[#D0FBD2]",
      Delivered: "text-white bg-[#06D001]",
      Delayed: "text-[#003337] bg-[#C0FBFF]",
    };

    return (
      <span
        className={`${statusClasses[status]} text-nowrap text-[12px] px-3 py-1.5 rounded-lg font-normal`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="w-full mt-6">
      {ShipmentData.map((item, index) => (
        <Accordion
          key={index}
          className="w-full bg-[#FFFFFF]"
          disableGutters
          sx={{
            "&.MuiAccordion-root:before": { display: "none" },
            boxShadow: "none",
            borderRadius: 2,
            mb: 2,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-[#003701]" />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            className="flex  items-start justify-between px-6 py-5 border-b border-[#DBD7D7]/30"
          >
            <div className="w-full">
              <div className="flex flex-wrap items-start gap-6 md:gap-20">
                <div className="flex flex-col items-start gap-1">
                  <p className="text-[#808080] text-[12px] font-normal">
                    Tracking ID
                  </p>
                  <h3 className="text-[#5A65AB] text-[16px] font-normal">
                    {item.trackingId}
                  </h3>
                </div>

                <div className="flex flex-col items-start gap-1">
                  <p className="text-[#808080] text-[12px] font-normal">
                    Sender
                  </p>
                  <h3 className="text-[#3A3A3A] text-[16px] font-normal">
                    {item.sender}
                  </h3>
                </div>

                <div className="flex flex-col items-start gap-1">
                  <p className="text-[#808080] text-[12px] font-normal">
                    Receiver
                  </p>
                  <h3 className="text-[#3A3A3A] text-[16px] font-normal">
                    {item.receiver}
                  </h3>
                </div>
              </div>
              <Divider
                sx={{
                  width: "100%",
                  marginTop: 3,
                  marginBottom: 1,
                }}
              />
            </div>
          </AccordionSummary>

          <AccordionDetails className="px-6 py-6 flex flex-col gap-6 border-b border-[#DBD7D7]/30">
            <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20">
                <div className="flex flex-col items-start gap-2">
                  <p className="text-[#808080] text-[12px] font-normal">
                    Pick Up From
                  </p>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/rw.webp"
                      alt="Rwanda Flag"
                      width={1000}
                      height={1000}
                      className="w-5 h-[13px] rounded-xs"
                    />
                    <h3 className="text-[#171717] text-[14px] font-normal">
                      {item.pickUp}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <p className="text-[#808080] text-[12px] font-normal">
                    Delivery To
                  </p>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/rw.webp"
                      alt="Rwanda Flag"
                      width={1000}
                      height={1000}
                      className="w-5 h-[13px] rounded-xs"
                    />
                    <h3 className="text-[#171717] text-[14px] font-normal">
                      {item.deliveryTo}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-1">
                  <p className="text-[#808080] text-[12px] font-normal">
                    Amount
                  </p>
                  <h3 className="text-[#3A3A3A] text-[16px] font-normal">
                    N{item.amount}
                  </h3>
                </div>
              </div>

              <div className="w-fit flex flex-col items-start gap-1">
                <p className="text-[#808080] text-[12px] font-normal">Status</p>
                {deliveryStatus(item.deliveryStatus)}
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-20 pt-3 md:pt-6">
              <div className="flex flex-col items-start gap-1">
                <p className="text-[#808080] text-[12px] font-normal">
                  Processing time
                </p>
                <div className="flex items-center gap-2">
                  <MdOutlineAlarm className="text-[#3A3A3A]" />
                  <h3 className="text-[#3A3A3A] text-[16px] font-normal">
                    {item.processingTime} hours
                  </h3>
                </div>
              </div>
              <div className="flex flex-wrap items-start gap-3">
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#262A48",
                    borderColor: "#262A48",
                  }}
                >
                  View More
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#FFFFFF",
                    backgroundColor: "#262A48",
                  }}
                >
                  {item.paymentStatus}
                </Button>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default ShipmentInfo;
