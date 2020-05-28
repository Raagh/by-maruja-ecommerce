import React from 'react';

import styled from 'styled-components';
import { CategoryConfiguration } from '../../../model/category-configuration';
import CategoriesContainer from './categories-container';
import { device } from '../../../config/device';
import { typography, colors } from '../../../config/global-styles';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  padding: 0 1.5rem 0 1.5rem;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;

  @media ${device.large} {
    padding: 0 6.75rem 0 6.75rem;
    margin-top: 192px;
  }
`;

const ProductCategoriesTitle = styled.h2`
  font-family: ${typography.titles.h4.font.name};
  font-style: normal;
  font-weight: ${typography.titles.h4.font.regularWeight};
  font-size: ${typography.titles.h4.fontSize};
  line-height: ${typography.titles.h4.lineHeight};
  color: ${colors.ui.darkSurface};
  margin-bottom: 2.5rem;
  text-align: center;

  @media ${device.large} {
    margin-bottom: 4.5rem;
    text-align: left;
    font-family: ${typography.titles.h2.font.name};
    font-weight: ${typography.titles.h2.font.regularWeight};
    font-size: ${typography.titles.h2.fontSize};
    line-height: ${typography.titles.h2.lineHeight};
  }
`;

const ProductCategories = ({ categories }: { categories: CategoryConfiguration[] }) => {
  return (
    <Container>
      <ProductCategoriesTitle>Nuestros Productos</ProductCategoriesTitle>
      <CategoriesContainer categories={categories} />
    </Container>
  );
};

export default ProductCategories;
