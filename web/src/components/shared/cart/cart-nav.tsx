import React from 'react';
import styled from 'styled-components';
import { device } from '../../../config/device';
import { colors } from '../../../config/global-styles';
import { BodyCopyBoldLarge } from '../../../config/global-styled-components';

const CartNavContainer = styled.section`
  min-width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-right: 1.5rem;
  padding-left: 1.5rem;
  padding-top: 1.5rem;

  background-color: ${colors.ui.whiteBackground};
  @media ${device.large} {
    display: none;
  }
`;

const BackButton = styled.img`
  z-index: 10;
  @media ${device.large} {
    display: none;
  }
`;

const InvDiv = styled.div`
  width: 24px;
`;

const CartNav = ({ clickHandler }: { clickHandler: () => void }) => {
  return (
    <CartNavContainer>
      <BackButton onClick={clickHandler} src="/assets/Arrow-Back.svg" alt="Back button" />
      <BodyCopyBoldLarge>Mi Carrito</BodyCopyBoldLarge>
      <InvDiv />
    </CartNavContainer>
  );
};

export default CartNav;
