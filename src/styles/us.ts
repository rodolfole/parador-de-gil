import { Box, Button, styled, Typography } from "@mui/material";

export const UsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  padding: "0px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const UsImage = styled("img")<{ wMd?: string; wSm?: string }>(
  ({ src, theme, width, wMd, wSm }) => ({
    maxWidth: "100%",
    objectFit: "contain",
    src: `url(${src})`,
    width: width ? width : "600px",
    [theme.breakpoints.down("md")]: {
      width: wMd ? wMd : "400px",
    },
    [theme.breakpoints.down("sm")]: {
      width: wSm ? wSm : "320px",
    },
  })
);

export const UsContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    maxWidth: 650,
  },
  maxWidth: 560,
  padding: "30px",
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: "72px",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
  },
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));

export const BannerShopButton = styled(Button)(({ theme }) => ({
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  padding: "20px 0px",
  [theme.breakpoints.down("sm")]: {
    padding: "10px 0px",
    fontSize: "14",
  },
}));
