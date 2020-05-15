import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  min-width: 100wh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const Bag = styled.img`
  margin-right: 27px;
  margin-top: 24px;
`;

const Logo = styled.img`
  margin-top: 8px;
`;

const Menu = styled.img`
  margin-left: 24px;
  margin-top: 26px;
`;

const NavBar = () => {
    return (
        <Container>
            <Menu src= "/assets/ICN-Menu 1.svg" alt = "Menu icon" />
            <Logo src= "/assets/Logo.svg" alt = "Maruja Logo" />
            <Bag src= "/assets/bag.svg" alt = "Bag icon" />    
        </Container>
    );
  };

export default NavBar;
