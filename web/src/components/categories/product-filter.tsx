import React, { useState } from 'react';

import styled from 'styled-components';

import { colors } from '../../config/global-styles';
import { LabelSmall, BodyCopyRegularSmall } from '../../config/global-styled-components';
import Chevron from '../shared/chevron';
import { Tags } from '../../model/filters/tags';
import { Order } from '../../model/filters/order';

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

const FilterTitle = styled(LabelSmall)`
  ${(props: { isOpen: boolean }) => (props.isOpen ? 'font-weight:bold;' : '')}
`;

const DropdownList = styled.ul`
  list-style-type: none;
  text-align: center;
  transition: ease 2.5;

  ${(props: { shouldDisplayDropdown: boolean }) => (props.shouldDisplayDropdown ? 'display:block' : 'display:none')};
`;

const ProductFilter = ({
  filterProducts,
  orderProducts,
}: {
  filterProducts: (tag: Tags) => void;
  orderProducts: (tag: Order) => void;
}) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const filterAndClose = (tag: Tags) => {
    filterProducts(tag);
    setIsFiltersOpen(false);
  };

  const orderAndClose = (order: Order) => {
    orderProducts(order);
    setIsOrderOpen(false);
  };

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
          <FilterTitle isOpen={isFiltersOpen}>filtrar</FilterTitle>
          <Chevron isOpen={isFiltersOpen} />
        </Dropdown>
        <Dropdown
          isOpen={isOrderOpen}
          onClick={() => {
            setIsOrderOpen(!isOrderOpen);
            if (!isOrderOpen && isFiltersOpen) setIsFiltersOpen(false);
          }}
        >
          <FilterTitle isOpen={isOrderOpen}>ordernar por</FilterTitle>
          <Chevron isOpen={isOrderOpen} />
        </Dropdown>
      </HeaderContainer>
      <ListContainer>
        <DropdownList shouldDisplayDropdown={isOrderOpen}>
          <DropdownListItem onClick={() => orderAndClose(Order.ASC)}>precio ascendente</DropdownListItem>
          <DropdownListItem onClick={() => orderAndClose(Order.DESC)}>precio descendente</DropdownListItem>
        </DropdownList>
        <DropdownList shouldDisplayDropdown={isFiltersOpen}>
          <DropdownListItem onClick={() => filterAndClose(Tags.Steel)}>acero quirúrgico</DropdownListItem>
          <DropdownListItem onClick={() => filterAndClose(Tags.Discount)}>en descuento</DropdownListItem>
          <DropdownListItem onClick={() => filterAndClose(Tags.Favorite)}>favoritos</DropdownListItem>
          <DropdownListItem onClick={() => filterAndClose(Tags.All)}>todos</DropdownListItem>
        </DropdownList>
      </ListContainer>
    </FilterContainer>
  );
};

export default ProductFilter;
