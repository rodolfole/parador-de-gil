import { Typography } from "@mui/material";

import data from "../data.json";
import { UsContainer, UsContent, UsImage } from "../styles/us";

const Us = () => {
  const { about } = data;

  return (
    <UsContainer
      id="us"
      sx={{ background: "#ffd494", paddingBottom: "40px", paddingTop: "40px" }}
    >
      <UsContent>
        <Typography color="secondary" variant="h4" pb={4}>
          Nosotros
        </Typography>
        <Typography component="p" textAlign="justify">
          {about.us}
        </Typography>
      </UsContent>
      <UsImage
        src={`${process.env.REACT_APP_URI}/assets/img/food/10.png`}
        wMd="500px"
        wSm="320px"
      />
    </UsContainer>
  );
};

export default Us;
