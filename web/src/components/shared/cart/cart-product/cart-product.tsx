import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCart } from '../../../../lamda-services/use-local-storage';
import CartEmpty from './cart-empty';
import Faq from '../../faq';
import CartList from './cart-list';

const CartProductContainer = styled.div``;

const CartProduct = ({ isOpen }: { isOpen: boolean }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let newCart = getCart();
    if (newCart) setCart(newCart);
  }, [isOpen]);

  return (
    <CartProductContainer>
      <CartEmpty cart={cart} />
      <CartList />
      <Faq />
    </CartProductContainer>
  );
};

export default CartProduct;
