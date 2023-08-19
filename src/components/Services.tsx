import { Box, Grid, List, ListItemText, Typography } from "@mui/material";

import data from "../data.json";

const Services = () => {
  const { about } = data;

  const renderServices = about.services.map((service, idx) => (
    <Grid
      item
      key={idx}
      xs={2}
      sm={4}
      md={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      height={250}
    >
      <Service service={service} />
    </Grid>
  ));

  return (
    <>
      <Box id="services">
        <Typography color="primary" variant="h4" pt={16}>
          Servicios
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          justifyContent="center"
          sx={{ margin: "20px 4px 10px 4px" }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          py={4}
        >
          {renderServices}
        </Grid>
      </Box>
    </>
  );
};

export default Services;

type Props = {
  service: {
    description: string[];
    icon: string;
    title: string;
  };
};

export const Service = ({ service: { description, icon, title } }: Props) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <i
        className={`fa-solid fa-${icon} fa-4x`}
        style={{ color: "#f5b800" }}
      ></i>
      <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: "2.125rem" } }}>
        {title}
      </Typography>
      <List>
        {description.map((item, idx2) => (
          <ListItemText key={idx2}>{item}</ListItemText>
        ))}
      </List>
    </Box>
  );
};
