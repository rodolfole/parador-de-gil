import { Box, Grid, Typography } from "@mui/material";

import { Dish, DishImage } from "../styles/global";
import Categories from "./Categories";

const Dishes = () => {
  return (
    <Box
      id="dishes"
      sx={{
        maxWidth: 1152,
      }}
      px={8}
      py={4}
      pb={10}
    >
      <Typography color="secondary" variant="h4" pb={4}>
        Platillos populares
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        sx={{ margin: "20px 4px 10px 4px" }}
        columns={{ xs: 4, sm: 12, md: 12 }}
      >
        <Grid
          item
          xs={4}
          sm={6}
          md={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          height={250}
        >
          <Dish>
            <DishImage
              src={`${process.env.REACT_APP_URI}/assets/img/dishes/1.png`}
            />
          </Dish>
        </Grid>
        <Grid
          item
          xs={4}
          sm={6}
          md={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          height={250}
        >
          <Dish>
            <DishImage
              src={`${process.env.REACT_APP_URI}/assets/img/dishes/2.png`}
            />
          </Dish>
        </Grid>
        <Grid
          item
          xs={4}
          sm={6}
          md={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          height={250}
        >
          <Dish>
            <DishImage
              src={`${process.env.REACT_APP_URI}/assets/img/dishes/3.png`}
            />
          </Dish>
        </Grid>
      </Grid>
      <Categories />
      <Typography textAlign="center" fontWeight="bold" pt={4}>
        "En nuestro servicio express el platillo incluye: guarniciones,
        proteina, tortillas y bebida"
      </Typography>
    </Box>
  );
};

export default Dishes;
