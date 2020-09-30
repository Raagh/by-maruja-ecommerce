import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LinksSmall } from '../../config/global-styled-components';
import { device } from '../../config/device';
import { getCart } from '../../lamda-services/use-local-storage';

const Container = styled.section`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;
  z-index: 1;
  @media ${device.large} {
    margin-left: auto;
    margin-right: 0.25rem;
    :hover {
      cursor: pointer;
    }
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

const CartButton = ({ clickHandler }: { clickHandler: () => void }) => {
  const [cartItemNumber, setCartItemNumber] = useState(0);

  const updateCart = () => {
    let cart = getCart();
    console.log('storage updated');
    setCartItemNumber(cart ? cart.length : 0);
  };
  useEffect(() => {
    window.addEventListener('storage', updateCart);
    console.log(cartItemNumber);
    return function cleanup() {
      window.removeEventListener('storage', updateCart);
    };
  }, [cartItemNumber]);

  return (
    <Container onClick={clickHandler}>
      <Links>carrito</Links>
      <Bag src="/assets/Bag.svg" alt="Bag icon" />
    </Container>
  );
};

export default CartButton;
