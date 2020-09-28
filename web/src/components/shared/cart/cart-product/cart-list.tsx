import React from 'react';
import styled from 'styled-components';
import { CartProduct as CP } from '../../../../model/cart-product';
import SingleItem from './cart-single-item';

const CartListContainer = styled.div<{ cart: CP[] }>`
  ${(props) => (props.cart.length ? '' : 'display: none;')}
  margin: 4.5rem 0 4.5rem 0;
  text-align: center;
`;

const CartList = ({ cart }: { cart: CP[] }) => {
  return (
    <CartListContainer cart={cart}>
      {cart &&
        cart.map((product, index) => {
          return <SingleItem key={index} product={product} />;
        })}
    </CartListContainer>
  );
};

export default CartList;
