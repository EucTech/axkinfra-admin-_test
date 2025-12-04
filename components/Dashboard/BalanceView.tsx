import { Box, Typography, Button } from "@mui/material";
import React from "react";

const BalanceView = () => {
  return (
    <Box
      sx={{
        width: { xs: "95%", lg: "350px" },
        height: "163px",
        borderRadius: "12px",
        backgroundColor: "#5A65AB",
        px: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 1.5,
      }}
    >
      <Typography
        sx={{
          fontSize: "12px",
          color: "rgba(255,255,255,0.7)",
          fontWeight: 300,
        }}
      >
        Your Balance
      </Typography>

      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 900,
          color: "#FFFFFF",
        }}
      >
        N3,000,000
      </Typography>

      <Button
        variant="contained"
        sx={{
          fontSize: "12px",
          fontWeight: "500",
          width: "fit-content",
          py: 1,
          px: 2,
          borderRadius: "6px",
          color: "#5A65AB",
          backgroundColor: "#FFFFFF",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#FFFFFFE6",
          },
        }}
      >
        Fund Wallet
      </Button>
    </Box>
  );
};

export default BalanceView;
