"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import BalanceView from "./BalanceView";
import TotalShipment from "./TotalShipment";
import TotalExports from "./TotalExports";
import TotalImport from "./TotalImport";
import { Button, Menu, MenuItem } from "@mui/material";

const Overview = () => {
  const [selected, setSelected] = useState("This Month");

  const options = ["This Week", "This Month", "This Year"];

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="w-full flex flex-col gap-8 mt-10">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-[#171717] font-medium text-[24px]">Overview</h2>

        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          variant="outlined"
          sx={{
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            gap: 1,
            borderColor: "#262A48",
            color: "#262A48",
          }}
        >
          {selected}{" "}
          <IoIosArrowDown
            className={` ${
              open
                ? "rotate-180 transition-all duration-200"
                : "rotate-0 transition-all duration-200"
            }  `}
          />
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            paper: {
              sx: {
                width: "fit-content",
                padding: "0 2px",
                color: "#262A48",
              },
            },
            list: {
              "aria-labelledby": "basic-button",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              onClick={() => {
                setSelected(option);
                handleClose();
              }}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>

      <div className="w-full flex flex-col lg:flex-row md:items-start items-center justify-between gap-4">
        <BalanceView />
        <div className="w-full flex flex-col md:flex-row items-center justify-center lg:justify-end gap-3">
          <TotalShipment />
          <TotalExports />
          <TotalImport />
        </div>
      </div>
    </div>
  );
};

export default Overview;
