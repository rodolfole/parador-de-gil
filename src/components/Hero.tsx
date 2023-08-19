import { Box, Button, Typography } from "@mui/material";
import { Link as Scroll } from "react-scroll";

import { FadeBox } from "../styles/global";
import { UsContainer, UsContent, UsImage } from "../styles/us";

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${process.env.REACT_APP_URI}/assets/img/bg-table.jpg) !important`,
        height: "100vh",
        width: "100%",
      }}
    >
      <FadeBox
        height="100vh"
        sx={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <UsContainer>
          <UsContent>
            <Typography
              color="primary"
              variant="h3"
              sx={{ alignSelf: "center", fontSize: { xs: "2.4rem" } }}
            >
              La mejor comida para el camino!
            </Typography>
            <Scroll offset={-175} smooth spy to="dishes">
              <Button
                color="primary"
                variant="contained"
                sx={{ alignSelf: "baseline", borderRadius: 15 }}
              >
                Ver Platillos
              </Button>
            </Scroll>
          </UsContent>
          <UsImage
            className="__heroBg"
            src={`${process.env.REACT_APP_URI}/assets/img/Logo-Parador-Don-Gil.png`}
            width={800}
            wMd="600px"
            wSm="320px"
          />
        </UsContainer>
      </FadeBox>
    </Box>
  );
};

export default Hero;
