import React, { useState } from 'react';

import styled from 'styled-components';

import { colors } from '../../config/global-styles';
import { LabelSmall, BodyCopyRegularSmall } from '../../config/global-styled-components';
import Chevron from '../shared/chevron';
import { Tags } from '../../model/filters/tags';
import { Order } from '../../model/filters/order';
import { device } from '../../config/device';

const FilterContainer = styled.section`
  display: none;
  background-color: ${colors.ui.grey5percent};
  @media ${device.large} {
    display: block;
  }
`;

const ListContainer = styled.article``;

const HeaderContainer = styled.article`
  display: flex;
  justify-content: space-between;
  padding: 0 4.5rem 0 4.5rem;
  max-width: 1600px;
  margin: auto;
`;

const DropdownContainer = styled.article`
  ${(props: { isOpen: boolean }) =>
    props.isOpen ? `background-color:${colors.ui.grey10percent};` : `background-color:${colors.ui.grey5percent};`}
`;

const Dropdown = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
`;

const DropdownListItem = styled(BodyCopyRegularSmall)`
  padding: 1rem 2rem 1rem 2rem;
  background-color: ${colors.ui.grey10percent};

  &:hover {
    background-color: ${colors.ui.grey25percent};
    cursor: pointer;
  }
`;

const OrderTitle = styled(LabelSmall)`
  ${(props: { isOpen: boolean; isSelected: boolean }) => (props.isOpen ? 'font-weight:bold;' : '')}
  ${(props: { isOpen: boolean; isSelected: boolean }) => (props.isSelected ? 'font-weight:bold;' : '')}

  :hover {
    cursor: pointer;
  }
`;

const FilterTitle = styled(LabelSmall)`
  padding-right: 2rem;
  ${(props: { isSelected: boolean }) => (props.isSelected ? 'font-weight:bold;' : '')}
  ${(props: { isSelected: boolean }) => (props.isSelected ? 'text-decoration:underline;' : '')}

  :hover {
    cursor: pointer;
  }
`;

const Filters = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const DropdownList = styled.ul<{ shouldDisplayDropdown: boolean }>`
  list-style-type: none;
  text-align: center;
  transition: all 200ms ease-out;
  visibility: ${(props) => (props.shouldDisplayDropdown ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.shouldDisplayDropdown ? 1 : 0)};
  ${(props) => (props.shouldDisplayDropdown ? '' : 'height:0;')}
`;

const ProductFilterDesktop = ({
  filterProducts,
  orderProducts,
}: {
  filterProducts: (tag: Tags) => void;
  orderProducts: (tag: Order) => void;
}) => {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isOrderSelected, setIsOrderSelected] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(Tags.All);
  const [orderTitle, setOrderTitle] = useState('ordenar por');

  const orderAndClose = (order: Order) => {
    orderProducts(order);
    setIsOrderOpen(false);
    setOrderTitle(order);
    setIsOrderSelected(true);
  };

  const filterAndSet = (tag: Tags) => {
    filterProducts(tag);
    setSelectedFilter(tag);
  };

  return (
    <FilterContainer>
      <HeaderContainer>
        <Filters>
          <FilterTitle isSelected={selectedFilter === Tags.All} onClick={() => filterAndSet(Tags.All)}>
            todos
          </FilterTitle>
          <FilterTitle isSelected={selectedFilter === Tags.Steel} onClick={() => filterAndSet(Tags.Steel)}>
            acero quirúrgico
          </FilterTitle>
          <FilterTitle isSelected={selectedFilter === Tags.Discount} onClick={() => filterAndSet(Tags.Discount)}>
            en descuento
          </FilterTitle>
          <FilterTitle isSelected={selectedFilter === Tags.Favorite} onClick={() => filterAndSet(Tags.Favorite)}>
            favoritos
          </FilterTitle>
        </Filters>
        <DropdownContainer isOpen={isOrderOpen}>
          <Dropdown
            onClick={() => {
              setIsOrderOpen(!isOrderOpen);
            }}
          >
            <OrderTitle isSelected={isOrderSelected} isOpen={isOrderOpen}>
              {orderTitle}
            </OrderTitle>
            <Chevron isOpen={isOrderOpen} />
          </Dropdown>
        </DropdownContainer>
      </HeaderContainer>
      <ListContainer>
        <DropdownList shouldDisplayDropdown={isOrderOpen}>
          <DropdownListItem onClick={() => orderAndClose(Order.ASC)}>precio ascendente</DropdownListItem>
          <DropdownListItem onClick={() => orderAndClose(Order.DESC)}>precio descendente</DropdownListItem>
        </DropdownList>
      </ListContainer>
    </FilterContainer>
  );
};

export default ProductFilterDesktop;
