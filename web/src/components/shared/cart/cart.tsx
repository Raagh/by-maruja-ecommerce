import React, { useContext } from 'react';
import styled from 'styled-components';
import { device } from '../../../config/device';
import { store } from '../../../context/store';

import CartEmpty from './cart-empty';
import Faq from '../faq';
import CartList from './cart-list';

const CartProductContainer = styled.div`
  margin: 0 1.5rem 0 1.5rem;
`;

const FaqWrapper = styled.div`
  @media ${device.large} {
    display: none;
  }
`;

const Cart = () => {
  let { state } = useContext(store);
  let cart = state.cart;

  return (
    <section>
      <CartProductContainer>
        <CartEmpty cart={cart} />
        <CartList cart={cart} />
      </CartProductContainer>
      <FaqWrapper>
        <Faq />
      </FaqWrapper>
    </section>
  );
};

export default Cart;
