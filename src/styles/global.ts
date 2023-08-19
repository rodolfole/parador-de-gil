import { Box, Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Parallax = styled(Box)<{ bg: string }>(({ bg, height }) => ({
  backgroundAttachment: "fixed",
  backgroundImage: `url(${bg}) !important`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: height ? `${height}` : "100vh",
  position: "relative",
  width: "100%",
}));

export const FadeBox = styled(Box)<{ a?: number; bg?: string; pd?: string }>(
  ({ a, bg, pd, height }) => ({
    background: `rgba(0, 0, 0, 0.${a ? a : 3}) !important`,
    // height: 100vh;
    width: "100%",
    padding: pd ? pd : "80px",
    height: height ? `${height}` : "800px",
  })
);

export const Dish = styled(Card)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    position: "relative",
  },
  borderRadius: "15px 70px 15px",
}));

export const DishImage = styled("img")(({ src, theme }) => ({
  transition: "0.5s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
  src: `url(${src})`,
  width: "100%",
  [theme.breakpoints.down("md")]: {
    // width: "90%",
    padding: "24px",
  },
}));
