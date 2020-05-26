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

  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
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

const CategoriesContainer = ({ categories }: { categories: CategoryConfiguration[] }) => {
  return (
    <Container>
      <FirstCategory key={0}>
        <CategoryImg src={urlFor(categories[0].image)} alt={categories[0].name} />
        <StyledH5>{categories[0].name}</StyledH5>
      </FirstCategory>
      <SecondCategory key={1}>
        <CategoryImg src={urlFor(categories[1].image)} alt={categories[1].name} />
        <StyledH5>{categories[1].name}</StyledH5>
      </SecondCategory>
      <ThirdCategory key={2}>
        <CategoryImg src={urlFor(categories[2].image)} alt={categories[2].name} />
        <StyledH5>{categories[2].name}</StyledH5>
      </ThirdCategory>
      <FourthCategory key={3}>
        <CategoryImg src={urlFor(categories[3].image)} alt={categories[3].name} />
        <StyledH5>{categories[3].name}</StyledH5>
      </FourthCategory>
    </Container>
  );
};

export default CategoriesContainer;
