import { Box, Typography } from "@mui/material";

import data from "../data.json";

const { contact_info } = data;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box className="_df _jcse" p={2} sx={{ background: "#FCC101" }}>
      <Typography>
        &copy; {year} {contact_info.company}. Todos los derechos reservados
      </Typography>
      <Typography>
        Powered by{" "}
        <a href={`${process.env.REACT_APP_POWERED_BY}`} target="_blank" rel="noopener noreferrer">
          SIEMEX
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
