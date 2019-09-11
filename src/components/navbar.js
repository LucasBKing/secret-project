import React from "react";
import styled from "styled-components";
import SwitchButton from "./switch_button";

const Navbar = props => {
  return (
    <NavbarSection>
      <div className="container">
        <CenteredAlignment className="row">
          <NavItems className="col-12">
            <Logo>SP</Logo>
            <SwitchButton />
          </NavItems>
        </CenteredAlignment>
      </div>
    </NavbarSection>
  );
};

const NavbarSection = styled.section`
  height: 8vh;
  padding-top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 10px 18px #888888;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const Logo = styled.h2`
  font-weight: bold;
  font-size: 40px;
`;
const NavItems = styled.div`
  padding: 0px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const CenteredAlignment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Navbar;
