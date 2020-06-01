import React from 'react';
import styled from 'styled-components';
import { urlFor } from '../../../../lib/sanity';
import { CategoryConfiguration } from '../../../model/category-configuration';
import { device } from '../../../config/device';
import { StyledH4 } from '../../../config/global-styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: row;
  background: url('/assets/Background-Product-Categories.svg') no-repeat center;
  @media ${device.large} {
    background: url('/assets/Background-Product-Categories-Desktop.svg') no-repeat center;
    background-size: 70%;
  }
`;

const NormalColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-right: 1.5rem;
`;

const LoweredColumn = styled.article`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  width: 50%;

  @media ${device.large} {
    padding-right: 1.5rem;
  }
`;

const CategoryImg = styled.img`
  border-radius: 2px;
  max-width: 100%;
  object-fit: cover;
`;

const LinkContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkImg = styled.img`
  flex-shrink: 0;
  max-width: 100%;
  max-height: 12px;
`;

const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 1.5rem;
`;

const CategoryName = styled(StyledH4)``;

const createCategoryContent = (category: CategoryConfiguration) => {
  return (
    <CategoryContainer key={category.name}>
      <CategoryImg src={urlFor(category.image)} alt={category.name} />
      <LinkContainer>
        <CategoryName>{category.name}</CategoryName>
        <LinkImg src="/assets/Arrow.svg" alt="arrow" />
      </LinkContainer>
    </CategoryContainer>
  );
};

const createDesktopResult = (categories: CategoryConfiguration[]) => (
  <Container>
    {categories.map((category: CategoryConfiguration, index: number) => {
      const categoryContent = createCategoryContent(category);

      if (index % 2 === 0) return <NormalColumn key={category.name}>{categoryContent}</NormalColumn>;
      return <LoweredColumn key={category.name}>{categoryContent}</LoweredColumn>;
    })}
  </Container>
);

const createMobileResult = (categories: CategoryConfiguration[]) => () => {
  const normalColumnItems = categories.slice(0, categories.length / 2);
  const loweredColumnItems = categories.slice(categories.length / 2);
  return (
    <Container>
      <NormalColumn key="normal-column">{normalColumnItems.map(createCategoryContent)}</NormalColumn>
      <LoweredColumn key="lowered-column">{loweredColumnItems.map(createCategoryContent)}</LoweredColumn>
    </Container>
  );
};

const CategoriesContainer = ({ categories, isMobile }: { categories: CategoryConfiguration[]; isMobile: boolean }) => {
  return isMobile ? createMobileResult(categories)() : createDesktopResult(categories);
};

export default CategoriesContainer;
