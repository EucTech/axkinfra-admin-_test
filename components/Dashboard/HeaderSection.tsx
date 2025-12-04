import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { Box, Typography } from "@mui/material";

const HeaderSection = () => {
  return (
    <Box className="w-full flex flex-col gap-2 items-center justify-center">
      <Box className="w-full min-h-[245px] flex flex-col items-center justify-center relative overflow-hidden rounded-md px-5 xl:px-10 2xl:px-32 py-5 md:py-0">
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/d1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(38, 42, 72, 0.9)",
            zIndex: 10,
          }}
        />

        <Box className="relative z-30 flex flex-col md:flex-row items-center justify-center md:justify-between w-full h-full">
          <Typography
            variant="h4"
            color="#FFFFFF"
            sx={{ fontSize: { sm: "26px", lg: "30px" }, textAlign: { xs: "center", md: "left" } }}
          >
            KEEP UP WITH YOUR BUSINESS NEEDS
          </Typography>

          <Image
            src="/d2.png"
            alt="hero"
            width={1000}
            height={1000}
            className="w-[150px] md:w-[200px] object-cover"
          />
        </Box>
      </Box>

      <Box className="flex items-center justify-center">
        <GoDotFill className="text-[#D4D4D4] size-[18px]" />
        <GoDotFill className="text-[#32385E] size-[18px]" />
        <GoDotFill className="text-[#D4D4D4] size-[18px]" />
      </Box>
    </Box>
  );
};

export default HeaderSection;
