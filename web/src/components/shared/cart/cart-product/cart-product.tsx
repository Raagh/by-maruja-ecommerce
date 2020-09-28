import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { device } from '../../../../config/device';
import { getCart } from '../../../../lamda-services/use-local-storage';
import CartEmpty from './cart-empty';
import Faq from '../../faq';
import CartList from './cart-list';

const CartProductContainer = styled.div`
  margin: 0 1.5rem 0 1.5rem;
`;

const FaqWrapper = styled.div`
  @media ${device.large} {
    display: none;
  }
`;

const CartProduct = ({ isOpen }: { isOpen: boolean }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let newCart = getCart();
    if (newCart) setCart(newCart);
  }, [isOpen]);

  return (
    <CartProductContainer>
      <CartEmpty cart={cart} />
      <CartList cart={cart} />
      <FaqWrapper>
        <Faq />
      </FaqWrapper>
    </CartProductContainer>
  );
};

export default CartProduct;
