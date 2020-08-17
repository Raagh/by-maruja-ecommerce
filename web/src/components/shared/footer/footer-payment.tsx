import React from 'react';
import styled from 'styled-components';

import { device } from '../../../config/device';
import { colors } from '../../../config/global-styles';

const FooterPaymentContainer = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  @media ${device.large} {
    border-bottom: 1px solid ${colors.ui.grey10percent};
    flex-direction: row;
    padding-bottom: 60px;
  }
`;

const FooterImage = styled.img`
  margin-bottom: 0.5rem;
  @media ${device.large} {
    display: none;
  }
`;

const FooterPaymentsImage = styled.div`
  display: block;
  width: 260px;
  height: 65px;
  margin-bottom: 0.5rem;
  background-image: url('/assets/Formas-Pago.svg');
  background-repeat: no-repeat;
  margin-left: auto;
  margin-right: auto;
  @media ${device.large} {
    width: 806px;
    height: 35px;
    background-image: url('/assets/Formas-Pago-Desktop.svg');
  }
`;

const FooterPayment = () => {
  return (
    <FooterPaymentContainer>
      <FooterImage src="/assets/MercadoPago-Logo.svg" alt="Mercado Pago Logo" />
      <FooterPaymentsImage />
    </FooterPaymentContainer>
  );
};

export default FooterPayment;
