import React from 'react';
import styled from 'styled-components';
import { LabelLarge, LabelLargeBold } from '../../config/global-styled-components';
import { NameAndPriceConfiguration } from '../../model/name-and-price-configuration';

const NameAndPriceContainer = styled.article`
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
  padding: 0 0.5rem 0 0.5rem;
`;

const LabelLargeBoldAligned = styled(LabelLargeBold)`
  padding-top: 4px;
`;

const NameAndPrice = (props: NameAndPriceConfiguration) => {
  return (
    <NameAndPriceContainer>
      <LabelLarge>{props.name}</LabelLarge>
      <LabelLargeBoldAligned>{props.price}$</LabelLargeBoldAligned>
    </NameAndPriceContainer>
  );
};

export default NameAndPrice;
