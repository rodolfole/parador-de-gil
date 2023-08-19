import { Box, Typography } from "@mui/material";

import data from "../data.json";

const Mission = () => {
  const { about } = data;

  return (
    <Box display="flex" flexDirection="row" justifyContent="space-evenly">
      <i className="fa-solid fa-shield-halved fa-2x"></i>
      <Box px={4}>
        <Typography color="primary" variant="h4" marginBottom={2}>
          Misión
        </Typography>
        <Typography component="p">{about.mission}</Typography>
      </Box>
    </Box>
  );
};

export default Mission;
