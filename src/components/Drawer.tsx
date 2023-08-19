import {
  Divider,
  Drawer as MuiDrawer,
  List,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";

import { useUIContext } from "../context/ui";
import { DrawerCloseButton, ListItemTxt } from "../styles/navbar";

const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;

const Drawer = () => {
  const { drawerOpen, setDrawerOpen } = useUIContext();

  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <i
            className="fa-solid fa-xmark fa-2x"
            style={{ color: "white !important" }}
          ></i>
        </DrawerCloseButton>
      )}
      <MuiDrawer open={drawerOpen} anchor="right" transitionDuration={100}>
        <List>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemTxt
              activeClass="_active-item"
              offset={-169}
              smooth
              spy
              to="us"
            >
              Nosotros
            </ListItemTxt>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemTxt
              activeClass="_active-item"
              offset={-105}
              smooth
              spy
              to="services"
            >
              Servicios
            </ListItemTxt>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemTxt
              activeClass="_active-item"
              offset={-136}
              smooth
              spy
              to="mission"
            >
              Misión
            </ListItemTxt>
          </ListItemButton>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemTxt
              activeClass="_active-item"
              offset={-136}
              smooth
              spy
              to="contact"
            >
              Contacto
            </ListItemTxt>
          </ListItemButton>
          <MiddleDivider />
        </List>
      </MuiDrawer>
    </>
  );
};

export default Drawer;
