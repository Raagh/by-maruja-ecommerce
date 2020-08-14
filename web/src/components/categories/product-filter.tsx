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

const Dropdown = styled.article``;

const DropdownHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

const DropdownListItem = styled.li``;

const DropdownList = styled.ul`
  list-style-type: none;
`;

const ProductFilter = () => {
  return (
    <FilterContainer>
      <Dropdown>
        <DropdownHeader>
          <LabelSmall>filtrar</LabelSmall>
          <Chevron isOpen={false} />
        </DropdownHeader>
        <DropdownList>
          <DropdownListItem>acero quirurgico</DropdownListItem>
          <DropdownListItem>nuevos</DropdownListItem>
          <DropdownListItem>en descuento</DropdownListItem>
          <DropdownListItem>favoritos</DropdownListItem>
          <DropdownListItem>todos</DropdownListItem>
        </DropdownList>
      </Dropdown>
      <Dropdown>
        <DropdownHeader>
          <LabelSmall>ordernar por</LabelSmall>
          <Chevron isOpen={false} />
        </DropdownHeader>
        <DropdownList>
          <DropdownListItem>precio</DropdownListItem>
          <DropdownListItem>todos</DropdownListItem>
        </DropdownList>
      </Dropdown>
    </FilterContainer>
  );
};

export default ProductFilter;
