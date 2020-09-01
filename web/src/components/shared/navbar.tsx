import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { LinksSmall } from '../../config/global-styled-components';
import { colors } from '../../config/global-styles';
import { device } from '../../config/device';
import CartButton from './cart-button';

const Container = styled.section`
  min-width: 100wh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  padding-right: 1.5rem;
  padding-left: 1.5rem;

  background-color: ${colors.ui.grey5percent};
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

const Menu = styled.img`
  margin-top: 26px;
  @media ${device.large} {
    display: none;
  }
`;

const StyledLink = styled(LinksSmall)`
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
      <Menu src="/assets/Menu.svg" alt="Menu icon" />
      <a href="/">
        <Logo src="/assets/Logo.svg" alt="Maruja Logo" />
      </a>

      <Link href="/categories/productos" passHref>
        <StyledLink>productos</StyledLink>
      </Link>
      <Link href="/" passHref>
        <StyledLink>contacto y ayuda</StyledLink>
      </Link>
      <Link href="/" passHref>
        <StyledLink>sobre Maruja</StyledLink>
      </Link>
      <CartButton />
    </Container>
  );
};

export default NavBar;
