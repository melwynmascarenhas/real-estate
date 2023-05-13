import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import fbIcon from "../media/fbicon.png";
import twitterIcon from "../media/twittericon.png";
import linkedinIcon from "../media/linkedinicon.png";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "400",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  return (
    <Box sx={{ py: 10 }}>
      <CustomContainer>
        <CustomContainer>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "600",
                mb: 2,
              }}
            >
              Products
            </Typography>

            <FooterLink>Listing</FooterLink>
            <br />
            <br />
            <FooterLink>Properties</FooterLink>
            <br />
            <br />
            <FooterLink>Agents</FooterLink>
            <br />
            <br />
            <FooterLink>Blog</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "600",
                mb: 2,
              }}
            >
              Resources
            </Typography>

            <FooterLink>Our Homes</FooterLink>
            <br />
            <br />
            <FooterLink>Stories</FooterLink>
            <br />
            <br />
            <FooterLink>Video</FooterLink>
            <br />
            <br />
            <FooterLink>Free Trial</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "600",
                mb: 2,
              }}
            >
              Company
            </Typography>

            <FooterLink>Partnerships</FooterLink>
            <br />
            <br />
            <FooterLink>Terms of use</FooterLink>
            <br />
            <br />
            <FooterLink>Privacy</FooterLink>
            <br />
            <br />
            <FooterLink>Sitemap</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "600",
                mb: 2,
              }}
            >
              Get in touch
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#1C1C1D",
                fontWeight: "400",
                mb: 3,
              }}
            >
              You’ll find your next home, in any style you prefer.
            </Typography>

            <IconBox>
              <img src={fbIcon} alt="fbIcon" style={{ cursor: "pointer" }} />
              <img
                src={twitterIcon}
                alt="twitterIcon"
                style={{ cursor: "pointer" }}
              />
              <img
                src={linkedinIcon}
                alt="linkedinIcon"
                style={{ cursor: "pointer" }}
              />
            </IconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
