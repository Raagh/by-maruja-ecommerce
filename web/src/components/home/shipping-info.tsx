import React from 'react';
import styled from 'styled-components';
import { AlignedCenterContainer } from '../../config/global-styled-components';
import IconListItem from '../shared/icon-list-item';
import { typography, colors } from '../../config/global-styles';
import ShippingInfoJson from '../../config/shipping-info-conf.json';
import { device } from '../../config/device';
import { ShippingInfoConfig } from '../../model/shipping-info-configuration';

const ShippingInfoContainer = styled(AlignedCenterContainer)`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  7rem @media ${device.large} {
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
  width: 150px;
  margin: 0 auto 0 auto;
  @media ${device.large} {
    display: none;
  }
`;

const createShippingInfoContent = (shippingInfo: ShippingInfoConfig, key: number) => {
  return <IconListItem image={shippingInfo['image']} text={shippingInfo['text']} alt={shippingInfo['alt']} key={key} />;
};

const ShippingInfo = () => {
  return (
    <ShippingInfoContainer>
      <ShippingInfoTitle>{ShippingInfoJson.title}</ShippingInfoTitle>
      {ShippingInfoJson.data.map((data, index) => createShippingInfoContent(data, index))}
    </ShippingInfoContainer>
  );
};

export default ShippingInfo;
