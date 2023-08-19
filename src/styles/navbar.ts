import { Box, List } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-scroll";

import { Colors } from "./theme";

export const NavbarContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

export const NavbarLogo = styled(Box)(() => ({
  padding: "4px",
  flexGrow: 1,
  color: Colors.secondary,
}));

export const DefaultList = styled(List)<{ type: string }>(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

export const ListItemTxt = styled(Link)(() => ({
  color: "white !important",
  cursor: "pointer",
  flex: "1 1 auto",
}));

export const DrawerCloseButton = styled(Box)(() => ({
  background: Colors.primary,
  cursor: "pointer",
  padding: "10px 15px",
  position: "fixed",
  top: 0,
  right: "250px",
  zIndex: 1999,
}));
