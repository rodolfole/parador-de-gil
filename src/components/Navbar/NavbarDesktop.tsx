import { useState } from "react";
import { Link as Scroll } from "react-scroll";

import {
  DefaultList,
  ListItemTxt,
  NavbarContainer,
  NavbarLogo,
} from "../../styles/navbar";

type Props = {
  matches: any;
};

const NavbarDesktop = (_: Props) => {
  const [headerBg, setHeaderBg] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setHeaderBg(true);
    } else {
      setHeaderBg(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <NavbarContainer
      sx={{
        position: "fixed",
        width: "100%",
        zIndex: 1100,
        transition: "all 0.4s ease 0s",
        background: headerBg
          ? "rgba(48, 48, 48, 0.7)"
          : "rgba(48, 48, 48, 0.4)",
        paddingLeft: {
          lg: "220px",
        },
      }}
    >
      <NavbarLogo sx={{}}>
        <Scroll offset={-138} smooth spy to="hero">
          <img
            height={150}
            src={`${process.env.REACT_APP_URI}/assets/img/Logo-Parador-Don-Gil.png`}
            style={{ cursor: "pointer" }}
          />
        </Scroll>
      </NavbarLogo>
      <DefaultList type="row">
        <ListItemTxt
          activeClass="_active-item"
          offset={-169}
          smooth
          spy
          to="us"
        >
          Nosotros
        </ListItemTxt>

        <ListItemTxt
          activeClass="_active-item"
          offset={-105}
          smooth
          spy
          to="services"
        >
          Servicios
        </ListItemTxt>
        <ListItemTxt
          activeClass="_active-item"
          offset={-136}
          smooth
          spy
          to="mission"
        >
          Misión
        </ListItemTxt>
        <ListItemTxt
          activeClass="_active-item"
          offset={-136}
          smooth
          spy
          to="contact"
        >
          Contacto
        </ListItemTxt>
      </DefaultList>
    </NavbarContainer>
  );
};

export default NavbarDesktop;
