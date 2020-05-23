import React from 'react';
import styled from 'styled-components';
import { Container, StyledH4 } from '../../config/global-styled-components';
import IconAndText from '../shared/iconAndText';

const ShippingInfoContainer = styled(Container)`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  padding-right: 25px;
`;
const ShippingInfo = () => {
  const image = '/assets/Warehouse-delivery.svg';
  const text1 = 'Comprá seguro con Mercado Pago, con tarjeta de crédito, débito o el que elijas';
  const text2 = 'Mercado Envíos a toda la Argentina, gratis con compras de $500 o más';
  const text3 = '¿Algún problema? Contactanos, nuestra atención es 100% personalizada';

  return (
    <ShippingInfoContainer>
      <StyledH4>
        Bienvenida <br />a Maruja
      </StyledH4>
      <IconAndText image={image} text={text1} />
      <IconAndText image={image} text={text2} />
      <IconAndText image={image} text={text3} />
    </ShippingInfoContainer>
  );
};

export default ShippingInfo;
