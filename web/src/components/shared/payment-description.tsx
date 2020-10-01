import React from 'react';

import styled from 'styled-components';

import { BodyCopyRegularSmall, StyledH6Title } from '../../config/global-styled-components';
import Accordion from './accordion/accordion';

const PaddedH6Title = styled(StyledH6Title)`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const DeliveryInformationContainer = styled.div`
  margin-top: 1rem;
`;

const PaymentDescription = () => {
  return (
    <DeliveryInformationContainer>
      <Accordion title="Informacion sobre el pago" index={0} initialHiddenStatus isBold={false}>
        <img alt="mercadopago" src="/assets/MercadoPago.svg" />
        <PaddedH6Title>MERCADOPAGO</PaddedH6Title>
        <BodyCopyRegularSmall>
          Con Mercado Pago, tenés cuotas sin interés con tarjeta o efectivo en puntos de pago. ¡Y siempre es seguro!
          Además. no tiene costo adicional.
        </BodyCopyRegularSmall>
      </Accordion>
      <Accordion title="Informacion sobre envios y entregas" index={0} initialHiddenStatus isBold={false}>
        <img alt="mercadopago" src="/assets/Pagos.svg" />
        <PaddedH6Title>PAGO EN EFECTIVO EN LA ENTREGA</PaddedH6Title>
        <BodyCopyRegularSmall>
          Solo hacemos entregas gratis en las estacionesde tren Lomas de Zamora y Témperley. Si preferís pagar en ese
          momento, seleccioná “Efectivo” en Mercado Pago, ignorá el mail de prepago y escribime a hola@maruja.com para
          que coordinemos la entrega.
        </BodyCopyRegularSmall>
      </Accordion>
    </DeliveryInformationContainer>
  );
};

export default PaymentDescription;
