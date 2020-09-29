import React from 'react';
import styled from 'styled-components';
import { BodyCopyBoldSmall, BodyCopyBoldLarge, LabelSmall } from '../../../../config/global-styled-components';
import { colors } from '../../../../config/global-styles';
import { CartProduct as CP } from '../../../../model/cart-product';
import PrimaryButton from '../../primary-button';

const PurchaseSummaryContainer = styled.div`
  margin-top: 1rem;
  background: ${colors.ui.grey5percent};
`;

const InfoContainer = styled.div`
  display: flex;
  padding-top: 1.5rem;
  border-bottom: 1px solid ${colors.ui.grey25percent};
  padding-bottom: 1.5rem;
`;

const ShippingIconContainer = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;
const InfoTextContainer = styled.div`
  text-align: left;
`;

const InfoTextBold = styled(BodyCopyBoldSmall)`
  margin-bottom: 0.5rem;
`;

const PurchasePanel = styled.div`
  padding: 1.5rem 1rem;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const PurchaseSummary = ({ cart }: { cart: CP[] }) => {
  return (
    <PurchaseSummaryContainer>
      <InfoContainer>
        <ShippingIconContainer>
          <img src="/assets/Shippings.svg" alt="Shipping icon" />
        </ShippingIconContainer>
        <InfoTextContainer>
          <InfoTextBold>Podés elegir “Envío” o “Acordar la entrega” durante el pago.</InfoTextBold>
          <LabelSmall>Envíos gratis para comprasa partir de $2500.</LabelSmall>
        </InfoTextContainer>
      </InfoContainer>

      <PurchasePanel>
        <Total>
          <BodyCopyBoldSmall>TOTAL</BodyCopyBoldSmall>
          <BodyCopyBoldLarge>
            ${cart.reduce((accum, prod) => (accum += prod.price * prod.quantity), 0).toFixed(2)}
          </BodyCopyBoldLarge>
        </Total>
        <PrimaryButton text="COMPRAR CON MERCADO PAGO" url="/" />
      </PurchasePanel>
    </PurchaseSummaryContainer>
  );
};

export default PurchaseSummary;
