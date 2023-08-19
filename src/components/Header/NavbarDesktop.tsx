import { Link as Scroll } from "react-scroll";

import { DefaultList, NavbarContainer, NavbarLogo } from "../../styles/navbar";

type Props = {
  matches: any;
};

const HeaderDesktop = (_: Props) => {
  return (
    <NavbarContainer>
      <Scroll offset={-138} smooth spy to="hero">
        <NavbarLogo>
          <img
            height={150}
            src={`https://alpha.siemex.xyz/Logo-Parador-Don-Gil.png`}
          />
        </NavbarLogo>
      </Scroll>
      <DefaultList type="row">
        <Scroll activeClass="_active-item" offset={-136} smooth spy to="us">
          Nosotros
        </Scroll>
        <Scroll
          activeClass="_active-item"
          offset={-136}
          smooth
          spy
          to="services"
        >
          Servicios
        </Scroll>
        <Scroll
          activeClass="_active-item"
          offset={-136}
          smooth
          spy
          to="mission-vision"
        >
          Misión
        </Scroll>
      </DefaultList>
    </NavbarContainer>
  );
};

export default HeaderDesktop;
