import React from 'react';
import styled from 'styled-components';
import { BodyCopyRegularSmall } from '../../config/global-styled-components';
import { IconListItemConfig } from '../../model/icon-list-item-configuration';
import { device } from '../../config/device';

const FlexContainer = styled.article`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  width: 100%;
  max-width: 320px;
  height: 100%;
  margin: 2.5rem auto 0 auto;
  text-align: left;
  overflow: hidden;
  @media ${device.large} {
    margin-left: 6rem;
    align-items: center;
  }
`;

const MarginLeftBodyCopySmall = styled(BodyCopyRegularSmall)`
  margin-left: 1rem;
  height: 100%;
`;

const Icon = styled.img`
  @media ${device.large} {
    height: 40px;
  }
`;

const IconListItem = (props: IconListItemConfig) => {
  return (
    <FlexContainer>
      <Icon src={props.image} alt={props.alt} />
      <MarginLeftBodyCopySmall>{props.text}</MarginLeftBodyCopySmall>
    </FlexContainer>
  );
};

export default IconListItem;
