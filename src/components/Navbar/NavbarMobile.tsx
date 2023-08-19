import { Link as Scroll } from "react-scroll";

import { useUIContext } from "../../context/ui";
import { NavbarContainer, NavbarLogo } from "../../styles/navbar";

type Props = {
  matches: any;
};

const NavbarMobile = (_: Props) => {
  const { setDrawerOpen } = useUIContext();

  return (
    <NavbarContainer
      sx={{
        background: "rgba(48, 48, 48, 0.6)",
        position: "fixed",
        width: "100%",
        zIndex: 1100,
      }}
    >
      <NavbarLogo sx={{ display: "flex", justifyContent: "center" }}>
        <Scroll offset={-138} smooth spy to="hero">
          <img
            height={150}
            src={`https://alpha.siemex.xyz/Logo-Parador-Don-Gil.png`}
            style={{ cursor: "pointer" }}
          />
        </Scroll>
      </NavbarLogo>
      <i
        className="fa-solid fa-bars fa-2x"
        onClick={() => setDrawerOpen(true)}
        style={{ color: "white", cursor: "pointer", marginRight: "25px" }}
      ></i>
    </NavbarContainer>
  );
};

export default NavbarMobile;
