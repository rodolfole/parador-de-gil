import { ThemeProvider } from "@mui/system";
import { Box, Container, CssBaseline } from "@mui/material";

import Navbar from "./components/Navbar";
import Drawer from "./components/Drawer";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Vision from "./components/Vision";
import Us from "./components/Us";
import Contact from "./components/Contact";
import Map from "./components/Map";
import { UIProvider } from "./context/ui";

import theme from "./styles/theme";
import data from "./data.json";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Dishes from "./components/Dishes";

const { contact_info, ubication } = data;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UIProvider>
        <Navbar />
        <Container maxWidth="xl" sx={{ background: "#fff" }}>
          <Drawer />
        </Container>
        <Hero />
        <Us />
        <Container>
          <Services />
          {/* <Dishes /> */}
        </Container>
        <Box
          sx={{
            background: "#ffd494",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Dishes />
        </Box>
        <Container
          id="mission"
          sx={{
            display: "flex",
            py: 14,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Mission />
          <Vision />
        </Container>
        <Map
          height="300px"
          ubications={[
            {
              ...ubication,
              info: { business: contact_info.company, ...ubication.info },
            },
          ]}
          width="100%"
          zoom={12}
        />
        <Contact />
        <Footer />
      </UIProvider>
    </ThemeProvider>
  );
}

export default App;
