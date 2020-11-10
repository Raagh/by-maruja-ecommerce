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
    max-width: 408px;
    min-width: 408px;
  }
`;

const BackButton = styled.div`
  z-index: 10;
  background-image: url('/assets/Arrow-Back.svg');
  width: 14px;
  height: 14px;
  @media ${device.large} {
    background-image: url('/assets/Menu-Close.svg');
  }

  :hover {
    cursor: pointer;
  }
`;

const InvDiv = styled.div`
  width: 24px;
`;

const CartNav = ({ clickHandler }: { clickHandler: () => void }) => {
  return (
    <CartNavContainer>
      <BackButton onClick={clickHandler} />
      <BodyCopyBoldLarge>Carrito</BodyCopyBoldLarge>
      <InvDiv />
    </CartNavContainer>
  );
};

export default CartNav;
