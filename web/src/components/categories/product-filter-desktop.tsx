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

const Dropdown = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 1rem 2rem;
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

const OrderTitle = styled(LabelSmall)`
  ${(props: { isOpen: boolean }) => (props.isOpen ? 'font-weight:bold;' : '')}
`;

const FilterTitle = styled(LabelSmall)`
  padding-right: 2rem;
`;

const Filters = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const DropdownList = styled.ul`
  list-style-type: none;
  text-align: center;
  transition: ease 2.5;

  ${(props: { shouldDisplayDropdown: boolean }) => (props.shouldDisplayDropdown ? 'display:block' : 'display:none')};
`;

const ProductFilterDesktop = ({
  filterProducts,
  orderProducts,
}: {
  filterProducts: (tag: Tags) => void;
  orderProducts: (tag: Order) => void;
}) => {
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const orderAndClose = (order: Order) => {
    orderProducts(order);
    setIsOrderOpen(false);
  };

  return (
    <FilterContainer>
      <HeaderContainer>
        <Filters>
          <FilterTitle onClick={() => filterProducts(Tags.All)}>todos</FilterTitle>
          <FilterTitle onClick={() => filterProducts(Tags.Steel)}>acero quirúrgico</FilterTitle>
          <FilterTitle onClick={() => filterProducts(Tags.Discount)}>en descuento</FilterTitle>
          <FilterTitle onClick={() => filterProducts(Tags.Favorite)}>favoritos</FilterTitle>
        </Filters>
        <Dropdown
          isOpen={isOrderOpen}
          onClick={() => {
            setIsOrderOpen(!isOrderOpen);
          }}
        >
          <OrderTitle isOpen={isOrderOpen}>ordernar por</OrderTitle>
          <Chevron isOpen={isOrderOpen} />
        </Dropdown>
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
