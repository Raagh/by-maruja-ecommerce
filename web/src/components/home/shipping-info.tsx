import React from 'react';
import styled from 'styled-components';
import { AlignedCenterContainer } from '../../config/global-styled-components';
import IconListItem from '../shared/icon-list-item';
import { typography, colors } from '../../config/global-styles';
import siConf from '../../config/shipping-info-conf.json';
import { device } from '../../config/device';

const ShippingInfoContainer = styled(AlignedCenterContainer)`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  @media ${device.large} {
    flex-direction: row;
    justify-content: center;
  }
`;

const ShippingInfoTitle = styled.h4`
  font-family: ${typography.titles.h4.font.name};
  font-style: normal;
  font-weight: ${typography.titles.h4.font.regularWeight};
  font-size: ${typography.titles.h4.fontSize};
  line-height: ${typography.titles.h4.lineHeight};
  color: ${colors.ui.darkSurface};
  @media ${device.large} {
    display: none;
  }
`;

const ShippingInfo = () => {
  return (
    <ShippingInfoContainer>
      <ShippingInfoTitle>
        Bienvenida <br />a Maruja
      </ShippingInfoTitle>
      <IconListItem image={siConf['image']} text={siConf['text1']} alt={siConf['alt']} />
      <IconListItem image={siConf['image']} text={siConf['text2']} alt={siConf['alt']} />
      <IconListItem image={siConf['image']} text={siConf['text3']} alt={siConf['alt']} />
    </ShippingInfoContainer>
  );
};

export default ShippingInfo;
