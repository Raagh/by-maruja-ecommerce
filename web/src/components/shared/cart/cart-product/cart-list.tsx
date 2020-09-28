import React from 'react';
import styled from 'styled-components';
import { CartProduct as CP } from '../../../../model/cart-product';
import SingleItem from './cart-single-item';
import PurchaseSummary from './cart-purchase-summary';
import { device } from '../../../../config/device';
import { BodyCopyRegularSmall } from '../../../../config/global-styled-components';

const CartListContainer = styled.div<{ cart: CP[] }>`
  ${(props) => (props.cart.length ? '' : 'display: none;')}
  margin: 4.5rem 0 4.5rem 0;
  text-align: center;
`;

const MoreInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  @media ${device.large} {
    display: none;
  }
`;

const CartList = ({ cart }: { cart: CP[] }) => {
  return (
    <CartListContainer cart={cart}>
      {cart &&
        cart.map((product, index) => {
          return <SingleItem key={index} product={product} />;
        })}
      <PurchaseSummary cart={cart} />

      <MoreInfo>
        <BodyCopyRegularSmall>Información sobre el pago</BodyCopyRegularSmall>
        <img src="/assets/Add.svg" alt="Plus sign" />
      </MoreInfo>
      <MoreInfo>
        <BodyCopyRegularSmall>Información sobre envíos y entregas</BodyCopyRegularSmall>
        <img src="/assets/Add.svg" alt="Plus sign" />
      </MoreInfo>
    </CartListContainer>
  );
};

export default CartList;
