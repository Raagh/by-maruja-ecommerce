import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Headroom from 'react-headroom';
import { LinksSmall } from '../../../config/global-styled-components';
import { colors, typography } from '../../../config/global-styles';
import { device } from '../../../config/device';
import { CategoryConfiguration } from '../../../model/category-configuration';
import CartButton from '../cart-button';
import Cart from '../cart/cart';
import Menu from '../menu/menu';
import Sidebar from '../sidebar/sidebar';
import Chevron from '../chevron';
import NavbarDropHeader from './navbar-drop-header';

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
    padding: 0.75rem 3.75rem 0 3.75rem;

    justify-content: flex-start;
  }
`;

const Logo = styled.img`
  margin-top: 0.5rem;
  @media ${device.large} {
    margin-right: 0.75rem;
  }
`;

const LogoLink = styled.a`
  margin: auto;

  @media ${device.large} {
    margin: 0;
  }
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
  transition: ease-out 200ms;
  @media ${device.large} {
    display: flex;
  }

  :hover {
    color: ${colors.primary.dark};
  }
`;

const HeadroomContainer = styled(Headroom)`
  .headroom--unfixed {
    position: fixed !important;
    transition: all 0.2s ease-in-out 0s !important;
    min-height: 73px;
  }
`;

const LinkContainer = styled.div`
  display: none;
  flex-direction: row;
  margin-left: 2rem;

  @media ${device.large} {
    display: flex;
  }
`;

const StyledProductTitle = styled.article`
  font-family: ${typography.links.small.font.name};
  font-style: normal;
  font-weight: ${typography.links.small.font.fontWeight};
  font-size: ${typography.links.small.fontSize};
  line-height: ${typography.links.small.lineHeight};
  letter-spacing: ${typography.links.small.letterSpacing};
  color: ${colors.ui.darkSurface};

  text-transform: ${typography.links.textTransform};
  margin-top: 2rem;

  :hover {
    color: ${colors.primary.dark};
  }
`;

const StyledChevron = styled(Chevron)`
  margin-top: 1.781rem;
`;

const NavBar = ({ categories }: { categories: CategoryConfiguration[] }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isNavbarUnpinned, setNavbarUnpinned] = useState(true);

  useEffect(() => {
    if (isMenuOpen || isProductMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen, isProductMenuOpen]);

  return (
    <HeadroomContainer
      pinStart={-1}
      onUnpin={() => setNavbarUnpinned(true)}
      onPin={() => setNavbarUnpinned(false)}
      disable={isNavbarUnpinned && (isCartOpen || isMenuOpen)}
    >
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

        <LinkContainer onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}>
          <StyledProductTitle>productos</StyledProductTitle>
          <StyledChevron isOpen={isProductMenuOpen} />
        </LinkContainer>

        <Link href="/contact" passHref>
          <StyledLink>contacto y ayuda</StyledLink>
        </Link>
        <Link href="/about" passHref>
          <StyledLink>sobre Maruja</StyledLink>
        </Link>
        <Sidebar
          isOpen={isCartOpen}
          clickHandler={() => {
            setIsProductMenuOpen(false);
            setCartOpen(!isCartOpen);
          }}
          sidebarTitle="Carrito"
        >
          <Cart />
        </Sidebar>
        <CartButton
          clickHandler={() => {
            setIsProductMenuOpen(false);
            setCartOpen(!isCartOpen);
          }}
        />
      </Container>
      <NavbarDropHeader isOpen={isProductMenuOpen} categories={categories} />
    </HeadroomContainer>
  );
};

export default NavBar;
