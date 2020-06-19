import React from 'react';
import styled from 'styled-components';
import { LabelLarge, LabelLargeBold } from '../../config/global-styled-components';

const NameAndPriceContainer = styled.article`
  display: flex;
`;

const NameAndPrice = () => {
  return (
    <NameAndPriceContainer>
      <LabelLarge></LabelLarge>
      <LabelLargeBold></LabelLargeBold>
    </NameAndPriceContainer>
  );
};

export default NameAndPrice;
