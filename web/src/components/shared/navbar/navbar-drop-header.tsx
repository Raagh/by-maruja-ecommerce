import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../config/global-styles';
import { CategoryConfiguration } from '../../../model/category-configuration';
import ProductCategories from '../../home/categories/product-categories';

const DropHeaderContainer = styled.article`
  position: fixed;
  z-index: 10;
`;

const Header = styled.div<{ isOpen: boolean }>`
  width: 100vw;
  z-index: 11;
  height: ${(props) => (props.isOpen ? '100vh' : '0')};
  top: ${(props) => (props.isOpen ? '0' : '100%')};
  background-color: ${colors.ui.whiteBackground};
  overflow-x: hidden;
  transition: 0.5s;
  flex-flow: column;
  align-items: center;
`;

const NavbarDropHeader = ({ isOpen, categories }: { isOpen: boolean; categories: CategoryConfiguration[] }) => {
  return (
    <DropHeaderContainer>
      <Header isOpen={isOpen}>
        <ProductCategories categories={categories} />
      </Header>
    </DropHeaderContainer>
  );
};

export default NavbarDropHeader;
