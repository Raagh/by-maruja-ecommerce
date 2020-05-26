import React from 'react';
import styled from 'styled-components';
import { StyledH5 } from '../../../config/global-styled-components';
import { urlFor } from '../../../../lib/sanity';
import { CategoryConfiguration } from '../../../model/category-configuration';

const Container = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'first  . '
    'first  second'
    'third  second'
    'third  fourth'
    '.      fourth';

  background: url('/assets/Background-Product-Categories.svg') no-repeat center;
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
  width: 100%;
  border-radius: 2px;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LinkImg = styled.img`
  flex-shrink: 0;
`;

const createCategoryContent = (category: CategoryConfiguration) => {
  return (
    <div>
      <CategoryImg src={urlFor(category.image)} alt={category.name} />
      <LinkContainer>
        <StyledH5>{category.name}</StyledH5>
        <LinkImg src="/assets/Arrow.svg" alt="arrow" />
      </LinkContainer>
    </div>
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
