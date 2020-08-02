import React from 'react';

import styled from 'styled-components';

import { colors } from '../../config/global-styles';
import { LabelSmall } from '../../config/global-styled-components';
import Chevron from '../shared/chevron';

const FilterContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 4.5rem 1rem 4.5rem;
  background-color: ${colors.ui.grey5percent};
`;

const Dropdown = styled.article`
  display: flex;
  flex-direction: row;
`;

const ProductFilter = () => {
  return (
    <FilterContainer>
      <Dropdown>
        <LabelSmall>filtrar</LabelSmall>
        <Chevron isOpen={false} />
      </Dropdown>
      <Dropdown>
        <LabelSmall>ordernar por</LabelSmall>
        <Chevron isOpen={false} />
      </Dropdown>
    </FilterContainer>
  );
};

export default ProductFilter;
