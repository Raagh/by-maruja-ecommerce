import React, { useState } from 'react';

import styled from 'styled-components';

import { colors } from '../../config/global-styles';
import { LabelSmall, BodyCopyRegularSmall } from '../../config/global-styled-components';
import Chevron from '../shared/chevron';

const FilterContainer = styled.section``;

const ListContainer = styled.article``;

const HeaderContainer = styled.article`
  display: flex;
`;

const Dropdown = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem 1rem 2rem;
  ${(props: { isOpen: boolean }) =>
    props.isOpen ? `background-color:${colors.ui.grey10percent};` : `background-color:${colors.ui.grey5percent};`}
`;

const DropdownListItem = styled(BodyCopyRegularSmall)`
  padding: 1rem 2rem 1rem 2rem;
  background-color: ${colors.ui.grey10percent};

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
        <Dropdown
          isOpen={isFiltersOpen}
          onClick={() => {
            setIsFiltersOpen(!isFiltersOpen);
            if (!isFiltersOpen && isOrderOpen) setIsOrderOpen(false);
          }}
        >
          <LabelSmall>filtrar</LabelSmall>
          <Chevron isOpen={isFiltersOpen} />
        </Dropdown>
        <Dropdown
          isOpen={isOrderOpen}
          onClick={() => {
            setIsOrderOpen(!isOrderOpen);
            if (!isOrderOpen && isFiltersOpen) setIsFiltersOpen(false);
          }}
        >
          <LabelSmall>ordernar por</LabelSmall>
          <Chevron isOpen={isOrderOpen} />
        </Dropdown>
      </HeaderContainer>
      <ListContainer>
        <DropdownList shouldDisplayDropdown={isOrderOpen}>
          <DropdownListItem>precio</DropdownListItem>
          <DropdownListItem>todos</DropdownListItem>
        </DropdownList>
        <DropdownList shouldDisplayDropdown={isFiltersOpen}>
          <DropdownListItem>acero quirúrgico</DropdownListItem>
          <DropdownListItem>en descuento</DropdownListItem>
          <DropdownListItem>favoritos</DropdownListItem>
          <DropdownListItem>todos</DropdownListItem>
        </DropdownList>
      </ListContainer>
    </FilterContainer>
  );
};

export default ProductFilter;
