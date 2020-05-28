import React from 'react';
import styled from 'styled-components';
import { AlignedCenterContainer } from '../../config/global-styled-components';
import IconListItem from '../shared/icon-list-item';
import { typography, colors } from '../../config/global-styles';

const ShippingInfoContainer = styled(AlignedCenterContainer)`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
`;

const ShippingInfoTitle = styled.h4`
  font-family: ${typography.titles.h4.font.name};
  font-style: normal;
  font-weight: ${typography.titles.h4.font.regularWeight};
  font-size: ${typography.titles.h4.fontSize};
  line-height: ${typography.titles.h4.lineHeight};
  color: ${colors.ui.darkSurface};
`;

const ShippingInfo = () => {
  const image = '/assets/Warehouse-delivery.svg';
  const alt = 'Warehouse delivery icon';
  const text1 = 'Comprá seguro con Mercado Pago, con tarjeta de crédito, débito o el que elijas';
  const text2 = 'Mercado Envíos a toda la Argentina, gratis con compras de $500 o más';
  const text3 = '¿Algún problema? Contactanos, nuestra atención es 100% personalizada';

  return (
    <ShippingInfoContainer>
      <ShippingInfoTitle>
        Bienvenida <br />a Maruja
      </ShippingInfoTitle>
      <IconListItem image={image} text={text1} alt={alt} />
      <IconListItem image={image} text={text2} alt={alt} />
      <IconListItem image={image} text={text3} alt={alt} />
    </ShippingInfoContainer>
  );
};

export default ShippingInfo;
