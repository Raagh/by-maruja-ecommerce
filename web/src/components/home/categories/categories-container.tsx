import React from 'react';
import styled from 'styled-components';
import { urlFor } from '../../../../lib/sanity';
import { CategoryConfiguration } from '../../../model/category-configuration';
import { device } from '../../../config/device';
import { typography, colors } from '../../../config/global-styles';

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'first  . '
    'first  second'
    'third  second'
    'third  fourth'
    '.      fourth';

  background: url('/assets/Background-Product-Categories.svg') no-repeat center;
  grid-gap: 1.5rem;

  @media ${device.large} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      'first  .       third  .     '
      'first  second  third  fourth'
      '.      second  .      fourth';
    background: url('/assets/Background-Product-Categories-Desktop.svg') no-repeat center;
    background-size: 70%;
    grid-gap: 4rem;
  }
`;

const FirstCategory = styled.article`
  grid-area: first;
`;

const SecondCategory = styled.article`
  grid-area: second;
`;

const ThirdCategory = styled.article`
  grid-area: third;
`;

const FourthCategory = styled.article`
  grid-area: fourth;
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
const CategoriesContainer = ({ categories }: { categories: CategoryConfiguration[] }) => {
  return (
    <Container>
      <FirstCategory key={0}>{createCategoryContent(categories[0])}</FirstCategory>
      <SecondCategory key={1}>{createCategoryContent(categories[1])}</SecondCategory>
      <ThirdCategory key={2}>{createCategoryContent(categories[2])}</ThirdCategory>
      <FourthCategory key={3}>{createCategoryContent(categories[3])}</FourthCategory>
    </Container>
  );
};

export default CategoriesContainer;
