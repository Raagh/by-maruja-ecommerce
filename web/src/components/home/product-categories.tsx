import React from 'react';
import styled from 'styled-components';
import { StyledH4, StyledH5 } from '../../config/global-styled-components';
import { CategoryConfiguration } from '../../model/category-configuration';
import { urlFor } from '../../../lib/sanity';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem 0 1.5rem;
  margin-top: 80px;
`;

const CategoryTitle = styled(StyledH4)`
  margin-bottom: 2.5rem;
  text-align: center;
`;

const CategoriesContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
`;

const Category = styled.article``;

const LoweredCategory = styled.article``;

const CategoryImg = styled.img`
  width: 100%;
  border-radius: 2px;
`;

const ProductCategories = ({ categories }: { categories: CategoryConfiguration[] }) => {
  return (
    <Container>
      <CategoryTitle>Nuestros Productos</CategoryTitle>
      <CategoriesContainer>
        {categories?.map((category, index) => {
          if (index === 1 || index === 3) {
            return (
              <LoweredCategory key={index}>
                <CategoryImg src={urlFor(category.image)} alt={category.name} />
                <StyledH5>{category.name}</StyledH5>
              </LoweredCategory>
            );
          }

          return (
            <Category key={index}>
              <CategoryImg src={urlFor(category.image)} alt={category.name} />
              <StyledH5>{category.name}</StyledH5>
            </Category>
          );
        })}
      </CategoriesContainer>
    </Container>
  );
};

export default ProductCategories;
