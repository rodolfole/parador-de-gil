import { Box, Typography } from "@mui/material";

import data from "../data.json";

const Vision = () => {
  const { about } = data;

  return (
    <Box display="flex" flexDirection="row" justifyContent="space-evenly">
      <i className="fa-regular fa-eye fa-2x"></i>
      <Box px={4}>
        <Typography color="primary" variant="h4" marginBottom={2}>
          Visión
        </Typography>
        <Typography component="p">{about.vision}</Typography>
      </Box>
    </Box>
  );
};

export default Vision;
