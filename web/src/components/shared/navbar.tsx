import React from 'react';
import styled from 'styled-components';
import { LinksSmall } from '../../config/global-styled-components';
import { colors } from '../../config/global-styles';
import { device } from '../../config/device';
import CartButton from './cart-button';
import Menu from './menu/menu';

const Container = styled.section`
  min-width: 100wh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  padding-right: 1.5rem;
  padding-left: 1.5rem;

  background-color: ${colors.ui.lightBackground};
  @media ${device.large} {
    height: 100px;
    padding: 1.25rem 3.75rem 0 3.75rem;

    justify-content: flex-start;
  }
`;

const Logo = styled.img`
  margin-top: 0.5rem;
  @media ${device.large} {
    height: 68px;
    margin-right: 0.75rem;
  }
`;

const MenuBotton = styled.img`
  margin-top: 26px;
  @media ${device.large} {
    display: none;
  }
`;

const Links = styled(LinksSmall)`
  display: none;
  margin-top: 2rem;
  text-decoration: none;
  margin-left: 2rem;
  @media ${device.large} {
    display: block;
  }
`;

const NavBar = () => {
  return (
    <Container>
      <MenuBotton src="/assets/Menu.svg" alt="Menu icon" />
      <Menu isOpen={true} />
      <Logo src="/assets/Logo.svg" alt="Maruja Logo" />
      <Links href="/">productos</Links>
      <Links href="/">contacto y ayuda</Links>
      <Links href="/">sobre Maruja</Links>
      <CartButton />
    </Container>
  );
};

export default NavBar;
