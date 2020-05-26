import React from 'react';
import styled from 'styled-components';
import { colors } from '../../config/global-styles';
import { device } from '../../config/device';

const Container = styled.section`
  min-width: 100wh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  margin-right: 1.5rem;
  margin-left: 1.5rem;

  background-color: ${colors.ui.lightBackground};
  @media (${device.large}) {
    height: 100px;
    margin-right: 3.75rem;
    margin-left: 3.75rem;
  }
`;

const Bag = styled.img`
  margin-top: 1.5rem;
`;

const Logo = styled.img`
  margin-top: 0.5rem;
  @media (${device.large}) {
    height: 68px;
    margin-top: 1.25rem;
  }
`;

const Menu = styled.img`
  margin-top: 26px;
  @media (${device.large}) {
    display: none;
  }
`;

const NavBar = () => {
  return (
    <Container>
      <Menu src="/assets/Menu.svg" alt="Menu icon" />
      <Logo src="/assets/Logo.svg" alt="Maruja Logo" />
      <Bag src="/assets/Bag.svg" alt="Bag icon" />
    </Container>
  );
};

export default NavBar;
