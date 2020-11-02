import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { CategoryConfiguration } from '../../../model/category-configuration';
import { device } from '../../../config/device';
import { StyledH4 } from '../../../config/global-styled-components';
import RemoteFixedImage from '../../shared/image-types/remote-fixed-size-image';
import { colors } from '../../../config/global-styles';

const DesktopContainer = styled.section`
  display: none;

  @media ${device.large} {
    display: flex;
    flex-direction: row;
    background: url('/assets/Background-Product-Categories-Desktop.svg') no-repeat center;
    background-size: 70%;
    justify-content: center;
  }
`;

const MobileContainer = styled.section`
  display: flex;
  flex-direction: row;
  background: url('/assets/Background-Product-Categories.svg') no-repeat center;
  justify-content: center;
  max-width: 500px;
  margin: auto;
  @media ${device.large} {
    display: none;
  }
`;

const NormalColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 1.5rem;
`;

const LoweredColumn = styled.article`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  width: 100%;

  @media ${device.large} {
    padding-right: 1.5rem;
  }
`;

const CategoryImg = styled(RemoteFixedImage)`
  border-radius: 2px;
  max-width: 100%;
  object-fit: cover;
  transition: all 0.5s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
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

const StyledLink = styled.a`
  text-decoration: none;
  overflow: hidden;
`;

const CategoryName = styled(StyledH4)`
  :hover {
    color: ${colors.primary.dark};
  }
`;

const createCategoryContent = (category: CategoryConfiguration) => {
  const link = `categories/${category.searchName}`;
  return (
    <CategoryContainer key={category.name}>
      <Link href={link} passHref>
        <StyledLink>
          <CategoryImg image={category.image} alt={category.name} asset={category.asset} />
        </StyledLink>
      </Link>

      <LinkContainer>
        <Link href={link} passHref>
          <StyledLink>
            <CategoryName>{category.name}</CategoryName>
          </StyledLink>
        </Link>

        <LinkImg src="/assets/Arrow.svg" alt="arrow" />
      </LinkContainer>
    </CategoryContainer>
  );
};

const createDesktopResult = (categories: CategoryConfiguration[]) => (
  <DesktopContainer>
    {categories.map((category: CategoryConfiguration, index: number) => {
      const categoryContent = createCategoryContent(category);

      if (index % 2 === 0) return <NormalColumn key={category.name}>{categoryContent}</NormalColumn>;
      return <LoweredColumn key={category.name}>{categoryContent}</LoweredColumn>;
    })}
  </DesktopContainer>
);

const createMobileResult = (categories: CategoryConfiguration[]) => () => {
  const normalColumnItems = categories.slice(0, categories.length / 2);
  const loweredColumnItems = categories.slice(categories.length / 2);
  return (
    <MobileContainer>
      <NormalColumn key="normal-column">{normalColumnItems.map(createCategoryContent)}</NormalColumn>
      <LoweredColumn key="lowered-column">{loweredColumnItems.map(createCategoryContent)}</LoweredColumn>
    </MobileContainer>
  );
};

const CategoriesContainer = ({ categories }: { categories: CategoryConfiguration[] }) => {
  return (
    <div>
      {createDesktopResult(categories)}
      {createMobileResult(categories)()}
    </div>
  );
};

export default CategoriesContainer;
