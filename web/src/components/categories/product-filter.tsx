import React, { useState } from 'react';

import styled from 'styled-components';

import { colors } from '../../config/global-styles';
import { LabelSmall, BodyCopyRegularSmall } from '../../config/global-styled-components';
import Chevron from '../shared/chevron';

const FilterContainer = styled.section``;

const ListContainer = styled.article``;

const HeaderContainer = styled.article`
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

const DropdownListItem = styled(BodyCopyRegularSmall)`
  padding: 1rem 2rem 1rem 2rem;
  background-color: ${colors.ui.grey5percent};

  &:hover {
    background-color: ${colors.ui.grey25percent};
  }
`;

const DropdownList = styled.ul`
  list-style-type: none;
  text-align: center;
  transition: ease 2.5;

  ${(props: { shouldDisplayDropdown: boolean }) => (props.shouldDisplayDropdown ? 'display:block' : 'display:none')};
`;

const ProductFilter = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  return (
    <FilterContainer>
      <HeaderContainer>
        <Dropdown>
          <DropdownHeader
            onClick={() => {
              setIsFiltersOpen(!isFiltersOpen);
              if (!isFiltersOpen && isOrderOpen) setIsOrderOpen(false);
            }}
          >
            <LabelSmall>filtrar</LabelSmall>
            <Chevron isOpen={isFiltersOpen} />
          </DropdownHeader>
        </Dropdown>
        <Dropdown>
          <DropdownHeader
            onClick={() => {
              setIsOrderOpen(!isOrderOpen);
              if (!isOrderOpen && isFiltersOpen) setIsFiltersOpen(false);
            }}
          >
            <LabelSmall>ordernar por</LabelSmall>
            <Chevron isOpen={isOrderOpen} />
          </DropdownHeader>
        </Dropdown>
      </HeaderContainer>
      <ListContainer>
        <DropdownList shouldDisplayDropdown={isOrderOpen}>
          <DropdownListItem>precio</DropdownListItem>
          <DropdownListItem>todos</DropdownListItem>
        </DropdownList>
        <DropdownList shouldDisplayDropdown={isFiltersOpen}>
          <DropdownListItem>acero quirurgico</DropdownListItem>
          <DropdownListItem>nuevos</DropdownListItem>
          <DropdownListItem>en descuento</DropdownListItem>
          <DropdownListItem>favoritos</DropdownListItem>
          <DropdownListItem>todos</DropdownListItem>
        </DropdownList>
      </ListContainer>
    </FilterContainer>
  );
};

export default ProductFilter;
