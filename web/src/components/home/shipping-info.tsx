import React from 'react';
import styled from 'styled-components';
import { AlignedCenterContainer } from '../../config/global-styled-components';
import IconListItem from '../shared/icon-list-item';
import { typography, colors } from '../../config/global-styles';
import ShippingInfoJson from '../../config/shipping-info-conf.json';
import { device } from '../../config/device';
import { ShippingInfoConfig } from '../../model/shipping-info-configuration';

const ShippingInfoContainer = styled(AlignedCenterContainer)`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;

  @media ${device.large} {
    margin-top: 8rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
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

const StyledIconListItem = styled(IconListItem)`
  padding-left: 1rem;
  padding-top: 2rem;

  @media ${device.large} {
    padding-top: 0;
    height: 72px;
    margin-right: 6rem;
    max-width: 312px;
  }
`;

const createShippingInfoContent = (shippingInfo: ShippingInfoConfig, key: number) => {
  return <StyledIconListItem image={shippingInfo.image} text={shippingInfo.text} alt={shippingInfo.alt} key={key} />;
};

const ShippingInfoItemsContainer = styled.div`
  padding: 2.5rem auto 0 auto;
  display: flex;
  flex-direction: column;

  @media ${device.large} {
    flex-direction: row;
  }
`;

const ShippingInfo = () => {
  return (
    <ShippingInfoContainer>
      <ShippingInfoTitle>{ShippingInfoJson.title}</ShippingInfoTitle>
      <ShippingInfoItemsContainer>
        {ShippingInfoJson.data.map((data, index) => createShippingInfoContent(data, index))}
      </ShippingInfoItemsContainer>
    </ShippingInfoContainer>
  );
};

export default ShippingInfo;
