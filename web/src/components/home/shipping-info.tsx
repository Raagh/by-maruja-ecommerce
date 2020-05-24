import React from 'react';
import styled from 'styled-components';
import { Container, StyledH4 } from '../../config/global-styled-components';
import IconListItem from '../shared/icon-list-item';

const ShippingInfoContainer = styled(Container)`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;
const ShippingInfo = () => {
  const image = '/assets/Warehouse-delivery.svg';
  const alt = 'Warehouse delivery icon';
  const text1 = 'Comprá seguro con Mercado Pago, con tarjeta de crédito, débito o el que elijas';
  const text2 = 'Mercado Envíos a toda la Argentina, gratis con compras de $500 o más';
  const text3 = '¿Algún problema? Contactanos, nuestra atención es 100% personalizada';

  return (
    <ShippingInfoContainer>
      <StyledH4>
        Bienvenida <br />a Maruja
      </StyledH4>
      <IconListItem image={image} text={text1} alt={alt} />
      <IconListItem image={image} text={text2} alt={alt} />
      <IconListItem image={image} text={text3} alt={alt} />
    </ShippingInfoContainer>
  );
};

export default ShippingInfo;
