import React, { useContext } from 'react';
import styled from 'styled-components';
import { device } from '../../../config/device';
import { store } from '../../../context/store';

import CartEmpty from './cart-empty';
import Faq from '../faq';
import CartList from './cart-list';
import PaymentDescription from '../payment-description';

const CartProductContainer = styled.div`
  margin: 0 1.5rem 0 1.5rem;

  @media ${device.large} {
    margin: 0 2.5rem 0 2.5rem;
  }
`;

const FaqWrapper = styled.div`
  @media ${device.large} {
    display: none;
  }
`;

const CartContainer = styled.section`
  width: 100%;
`;

const Cart = () => {
  const { state } = useContext(store);
  const cart = state ? state.cart : [];

  return (
    <CartContainer>
      <CartProductContainer>
        <CartEmpty cart={cart} />
        <CartList cart={cart} />
        {cart.length > 0 && <PaymentDescription />}
      </CartProductContainer>
      {cart.length > 0 && (
        <FaqWrapper>
          <Faq />
        </FaqWrapper>
      )}
    </CartContainer>
  );
};

export default Cart;
