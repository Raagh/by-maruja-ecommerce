import React from 'react';
import styled from 'styled-components';
import { LinksSmall } from '../../config/global-styled-components';
import { device } from '../../config/device';

const Container = styled.section`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;
  @media ${device.large} {
    margin-left: auto;
    margin-right: 0.25rem;
  }
`;

const Bag = styled.img`
  @media ${device.large} {
    margin-top: 0.4rem;
    width: 14px;
    height: 17px;
  }
`;

const Links = styled(LinksSmall)`
  display: none;
  margin-top: 0.5rem;
  margin-right: 1.5rem;
  text-decoration: none;
  @media ${device.large} {
    display: block;
  }
`;

const CartButton = () => {
  return (
    <Container>
      <Links href="/">carrito</Links>
      <Bag src="/assets/Bag.svg" alt="Bag icon" />
    </Container>
  );
};

export default CartButton;
