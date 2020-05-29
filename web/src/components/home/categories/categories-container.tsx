import React from 'react';
import styled from 'styled-components';
import { urlFor } from '../../../../lib/sanity';
import { CategoryConfiguration } from '../../../model/category-configuration';
import { device } from '../../../config/device';
import { typography, colors } from '../../../config/global-styles';

const Container = styled.section`
  display: flex;
  flex-direction: row;
  background: url('/assets/Background-Product-Categories.svg') no-repeat center;
  @media ${device.large} {
    background: url('/assets/Background-Product-Categories-Desktop.svg') no-repeat center;
    background-size: 70%;
  }
`;

const NormalColumn = styled.article`
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

const CategoryName = styled.h4`
  font-family: ${typography.titles.h5.font.name};
  font-style: normal;
  font-weight: ${typography.titles.h5.font.regularWeight};
  font-size: ${typography.titles.h5.fontSize};
  line-height: ${typography.titles.h5.lineHeight};
  color: ${colors.ui.darkSurface};

  ${device.large} {
    font-family: ${typography.titles.h4.font.name};
    font-weight: ${typography.titles.h4.font.regularWeight};
    font-size: ${typography.titles.h4.fontSize};
    line-height: ${typography.titles.h4.lineHeight};
  }
`;

const isMediaQueryLarge = typeof window !== 'undefined' ? window.matchMedia(device.large).matches : false;

const createCategoryContent = (category: CategoryConfiguration) => {
  return (
    <CategoryContainer>
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
      if (index % 2 === 0) return <NormalColumn key={category.name}>{createCategoryContent(category)}</NormalColumn>;
      return <LoweredColumn key={category.name}>{createCategoryContent(category)}</LoweredColumn>;
    })}
  </Container>
);

const createMobileResult = (categories: CategoryConfiguration[]) => () => {
  const normalColumnItems = categories.slice(0, categories.length / 2);
  const loweredColumnItems = categories.slice(categories.length / 2);
  return (
    <Container>
      <NormalColumn>{normalColumnItems.map(createCategoryContent)}</NormalColumn>
      <LoweredColumn>{loweredColumnItems.map(createCategoryContent)}</LoweredColumn>
    </Container>
  );
};

const CategoriesContainer = ({ categories }: { categories: CategoryConfiguration[] }) => {
  return isMediaQueryLarge ? createDesktopResult(categories) : createMobileResult(categories)();
};

export default CategoriesContainer;
