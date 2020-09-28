import React from 'react';
import styled from 'styled-components';
import { device } from '../../../config/device';
import { colors } from '../../../config/global-styles';
import CartNav from './cart-nav';
import CartProduct from './cart-product/cart-product';

const CartContainer = styled.div<{ isOpen: boolean }>`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 11;
  top: 0;
  right: ${(props) => (props.isOpen ? '0' : '-100%')};
  background-color: ${colors.ui.whiteBackground};
  overflow-x: hidden;
  transition: 0.5s;
  display: flex;
  flex-flow: column;
  align-items: center;
  @media ${device.large} {
    display: none;
  }
`;

const Cart = ({ isOpen, clickHandler }: { isOpen: boolean; clickHandler: () => void }) => {
  return (
    <CartContainer isOpen={isOpen}>
      <CartNav clickHandler={clickHandler} />
      <CartProduct isOpen={isOpen} />
    </CartContainer>
  );
};

export default Cart;
