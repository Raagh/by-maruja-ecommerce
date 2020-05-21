import React from 'react';
import styled from 'styled-components';
import { BodyCopySmall } from '../../config/global-styled-components';
import { iconAndTextConfig } from '../../model/iconAndText-configuration';

const FlexContainer = styled.article`
  display: flex;
  flex-direction: row;
  padding: 0px;

  position: static;
  width: 320px;
  height: 72px;
  left: -3.5px;
  top: 120px;
`;

const Icon = styled.img``;

const IconAndText = (props: iconAndTextConfig) => {
  return (
    <FlexContainer>
      <Icon src={props.image} alt="Warehouse Delivery icon" />;<BodyCopySmall>{props.text}</BodyCopySmall>;
    </FlexContainer>
  );
};

export default IconAndText;
