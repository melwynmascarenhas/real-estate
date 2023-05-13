import { Button, styled } from "@mui/material";
import React from "react";

const CustomButton = ({
  backgroundColor,
  color,
  buttonText,
  heroBtn,
  guideBtn,
  getStartedBtn,
}) => {
  const CustomButton = styled(Button)(({ theme }) => ({
    maxWidth:"300px", 
    letterSpacing: 1,
    backgroundColor: backgroundColor,
    textTransform:"uppercase",
    color: color,
    fontWeight: "500",
    fontSize: "14px",
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    borderRadius: "7px",
    display: "block",
    "&:hover": {
      backgroundColor:`${getStartedBtn? "#fff": "#1E2d7a"}`,

    },
    [theme.breakpoints.down("md")]: {
      margin: heroBtn && theme.spacing(0, "auto", 3,"auto"),
      width: (heroBtn || getStartedBtn) && "90%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: guideBtn && theme.spacing(3),
      width: guideBtn && "90%",
    },
  }));

  return <CustomButton>{buttonText}</CustomButton>;
};

export default CustomButton;
