import { Button, styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import homeIllustration from "../media/illustration.jpg";
import CustomButton from "./CustomButton";

const GetStarted = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#17275F",
    height: "416px",
    margin:"auto",
gap:"2rem",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: theme.spacing(8),
      gap:"10",
      width: "90%",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(20, 0, 20, 0),
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  }));

  return (
    <CustomBox>
      
      <CustomContainer>
        <img
          src={homeIllustration}
          alt="illustration"
          style={{ height: "60%", width:"auto,", maxWidth:"100%", borderRadius:"10px", objectFit:"cover" }}
        />

        <Box sx={{display:"flex", flexDirection:"column", alignItems:"flex-start", mb:2, width:"auto" }}>
          <Typography
            sx={{ fontSize: "35px", color: "white", fontWeight: "600"}}
          >
           Find Your Dream Home Now
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "#ccc", fontWeight: "400", mt: 1, mb:2 }}
          >Join our community of happy customers and start your property search today!
          </Typography>

          <CustomButton
            backgroundColor="#fff"
            color="#17275F"
            buttonText="Get Started Now"
             getStartedBtn={true}
          />
        </Box>

        
      </CustomContainer>
    </CustomBox>
  );
};

export default GetStarted;
