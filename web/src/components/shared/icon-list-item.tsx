import React from 'react';
import styled from 'styled-components';
import { BodyCopySmall } from '../../config/global-styled-components';
import { IconListItemConfig } from '../../model/icon-list-item-configuration';

const FlexContainer = styled.article`
  display: flex;
  flex-direction: row;
  align-content: space-between;

  width: 100%;
  margin-top: 2.5rem;

  text-align: left;
`;

const MarginLeftBodyCopySmall = styled(BodyCopySmall)`
  margin-left: 1rem;
`;

const Icon = styled.img``;

const IconListItem = (props: IconListItemConfig) => {
  return (
    <FlexContainer>
      <Icon src={props.image} alt={props.alt} />
      <MarginLeftBodyCopySmall>{props.text}</MarginLeftBodyCopySmall>
    </FlexContainer>
  );
};

export default IconListItem;
