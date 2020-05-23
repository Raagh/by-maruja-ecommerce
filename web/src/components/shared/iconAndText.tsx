import React from 'react';
import styled from 'styled-components';
import { BodyCopySmall } from '../../config/global-styled-components';
import { iconAndTextConfig } from '../../model/iconAndText-configuration';

const FlexContainer = styled.article`
  display: flex;
  flex-direction: row;
  align-content: space-between;

  width: 320px;
  height: 72px;
  margin-top: 2.5rem;

  text-align: left;
`;

const MarginLeftBodyCopySmall = styled(BodyCopySmall)`
  margin-left: 1rem;
`;

const Icon = styled.img``;

const IconAndText = (props: iconAndTextConfig) => {
  return (
    <FlexContainer>
      <Icon src={props.image} alt="Warehouse Delivery icon" />
      <MarginLeftBodyCopySmall>{props.text}</MarginLeftBodyCopySmall>
    </FlexContainer>
  );
};

export default IconAndText;
