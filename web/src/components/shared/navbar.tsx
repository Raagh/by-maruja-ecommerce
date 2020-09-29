import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { LinksSmall } from '../../config/global-styled-components';
import { colors } from '../../config/global-styles';
import { device } from '../../config/device';
import { CategoryConfiguration } from '../../model/category-configuration';
import CartButton from './cart-button';
import Menu from './menu/menu';
import Sidebar from './sidebar/sidebar';
import Cart from './cart/cart';

const Container = styled.section`
  min-width: 100vw;
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

const LogoLink = styled.a`
  z-index: 10;
`;

const MenuBotton = styled.img`
  margin-top: 26px;
  z-index: 10;
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

const NavBar = ({ categories }: { categories: CategoryConfiguration[] }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <Container>
      <MenuBotton
        onClick={() => setMenuOpen(!isMenuOpen)}
        src={isMenuOpen ? '/assets/Menu-Close.svg' : '/assets/Menu.svg'}
        alt="Menu icon"
      />
      <Menu isOpen={isMenuOpen} categories={categories} />
      <LogoLink href="/">
        <Logo src="/assets/Logo.svg" alt="Maruja Logo" />
      </LogoLink>

      <Link href="/categories/productos" passHref>
        <StyledLink>productos</StyledLink>
      </Link>
      <Link href="/" passHref>
        <StyledLink>contacto y ayuda</StyledLink>
      </Link>
      <Link href="/" passHref>
        <StyledLink>sobre Maruja</StyledLink>
      </Link>
      <CartButton clickHandler={() => setCartOpen(!isCartOpen)} />

      <Sidebar isOpen={isCartOpen} clickHandler={() => setCartOpen(!isCartOpen)} sidebarTitle="Mi Carrito">
        <Cart isOpen={isCartOpen} />
      </Sidebar>
    </Container>
  );
};

export default NavBar;
