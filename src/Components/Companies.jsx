import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import logoImg from "../media/left_black.png";
import starsImg from "../media/Star.png";
import logosImg from "../media/logos.png";

const Companies = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: theme.spacing(2),
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
    },
  }));

  return (
    <Box sx={{ mt: 10 }}>
      <CustomContainer>
        <CustomBox>
          <img src={logoImg} alt="logo" style={{height: "40px", width:"auto" }} />
          <Typography
            variant="body2"
            sx={{
              color: "#7D8589",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            More than 45,000 trust RealEase
          </Typography>
        </CustomBox>

        <Box>
          <img src={starsImg} alt="stars" style={{ maxWidth: "100%" }} />
          <Typography
            variant="body2"
            sx={{
              color: "#7D8589",
              fontSize: "16px",
              fontWeight: "500",
              mt: 1,
            }}
          >
            5-Star Rating (2k+ Reviews)
          </Typography>
        </Box>
      </CustomContainer>

      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <img src={logosImg} alt="logos" />
      </Container>
    </Box>
  );
};

export default Companies;
