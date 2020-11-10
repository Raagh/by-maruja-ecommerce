import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { CartProduct as CP } from '../../../model/cart-product';
import { StyledH3, LinksLarge } from '../../../config/global-styled-components';
import { colors } from '../../../config/global-styles';
import FooterMobileDesktopLinks from '../footer/footer-mobile-desktop-links';
import FooterDisclaimer from '../footer/footer-disclaimer';

const EmptyContainer = styled.div<{ cart: CP[] }>`
  ${(props) => (props.cart.length ? 'display: none;' : '')}
  margin: 4.5rem 0 4.5rem 0;
  text-align: center;
`;

const EmptyCartTitle = styled(StyledH3)`
  margin-bottom: 4rem;
`;

const Line = styled.div`
  width: 8rem;
  border-bottom: 1px solid ${colors.ui.darkSurface};
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.5rem;
  margin-bottom: 8rem;
`;

const LinkPointer = styled(LinksLarge)`
  transition: ease-out 200ms;
  :hover {
    cursor: pointer;
    color: ${colors.primary.dark};
  }
`;
const CartEmpty = ({ cart }: { cart: CP[] }) => {
  return (
    <EmptyContainer cart={cart}>
      <EmptyCartTitle>
        Tu carrito
        <br /> está vacío.
      </EmptyCartTitle>
      <Link href="/categories/productos">
        <LinkPointer>DESCUBRIR PRODUCTOS</LinkPointer>
      </Link>
      <Line />

      <FooterMobileDesktopLinks isFooter={false} />
      <FooterDisclaimer />
    </EmptyContainer>
  );
};

export default CartEmpty;
