import React, { useState } from 'react';

import styled from 'styled-components';

import { colors } from '../../config/global-styles';
import { LabelSmall, BodyCopyRegularSmall } from '../../config/global-styled-components';
import Chevron from '../shared/chevron';
import { Tags } from '../../model/filters/tags';
import { Order } from '../../model/filters/order';
import { device } from '../../config/device';

const FilterContainer = styled.section`
  display: block;

  @media ${device.large} {
    display: none;
  }
`;

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
  ${(props: { isOpen: boolean; isSelected: boolean }) => (props.isOpen ? 'font-weight:bold;' : '')}
  ${(props: { isOpen: boolean; isSelected: boolean }) => (props.isSelected ? 'font-weight:bold;' : '')}
`;

const DropdownList = styled.ul<{ shouldDisplayDropdown: boolean }>`
  list-style-type: none;
  text-align: center;

  transition: all ease-out 200ms;
  visibility: ${(props) => (props.shouldDisplayDropdown ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.shouldDisplayDropdown ? 1 : 0)};
  display: ${(props) => (props.shouldDisplayDropdown ? 'block' : 'none')};
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
  const [isFilterSelected, setIsFilterSelected] = useState(false);
  const [isOrderSelected, setIsOrderSelected] = useState(false);
  const [filterTitle, setFilterTitle] = useState('filtrar');
  const [orderTitle, setOrderTitle] = useState('ordenar por');

  const filterAndClose = (tag: Tags) => {
    filterProducts(tag);
    setIsFilterSelected(true);
    if (tag !== Tags.All) setFilterTitle(tag.toLowerCase());
    else setFilterTitle('todos');
    setIsFiltersOpen(false);
  };

  const orderAndClose = (order: Order) => {
    orderProducts(order);
    setIsOrderSelected(true);
    setOrderTitle(order);
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
          <FilterTitle isSelected={isFilterSelected} isOpen={isFiltersOpen}>
            {filterTitle}
          </FilterTitle>
          <Chevron isOpen={isFiltersOpen} />
        </Dropdown>
        <Dropdown
          isOpen={isOrderOpen}
          onClick={() => {
            setIsOrderOpen(!isOrderOpen);
            if (!isOrderOpen && isFiltersOpen) setIsFiltersOpen(false);
          }}
        >
          <FilterTitle isSelected={isOrderSelected} isOpen={isOrderOpen}>
            {orderTitle}
          </FilterTitle>
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
