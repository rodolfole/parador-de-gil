import { Box, Grid, List, ListItemText, Typography } from "@mui/material";

import data from "../data.json";

const Categories = () => {
  const { about } = data;

  const renderServices = about.categories.map((category, idx) => (
    <Grid
      item
      key={idx}
      xs={3}
      sm={3}
      md={3}
      display="flex"
      flexDirection="column"
      alignItems="center"
      height={160}
    >
      <Category category={category} />
    </Grid>
  ));

  return (
    <>
      <Box id="services">
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          justifyContent="center"
          sx={{ margin: "20px 4px 10px 4px" }}
          columns={{ xs: 6, sm: 8, md: 12 }}
          pt={10}
        >
          {renderServices}
        </Grid>
      </Box>
    </>
  );
};

export default Categories;

type Props = {
  category: {
    description: string[];
    icons: string[];
    title: string;
  };
};

export const Category = ({ category: { icons, title } }: Props) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Box display="flex" justifyContent="center">
        {icons.map((icon, idx) => (
          <i
            key={idx}
            className={`fa-solid fa-${icon} fa-4x`}
            style={{ color: "#303030" }}
          ></i>
        ))}
      </Box>

      <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: "2.125rem" } }}>
        {title}
      </Typography>
    </Box>
  );
};
