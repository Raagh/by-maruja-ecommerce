import React from 'react';
import styled from 'styled-components';
import { device } from '../../../config/device';
import { colors } from '../../../config/global-styles';
import { CategoryConfiguration } from '../../../model/category-configuration';
import { StyledH1 } from '../../../config/global-styled-components';
import FooterMobileDesktopLinks from '../footer/footer-mobile-desktop-links';
import Link from 'next/link';

const MenuContainer = styled.div<{ isOpen: boolean }>`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 1;
  top: 0;
  left: ${(props) => (props.isOpen ? '0' : '-100%')};
  background-color: ${colors.ui.grey5percent};
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
  display: flex;
  justify-content: space-around;
  flex-flow: column;
  align-items: center;
  @media ${device.large} {
    display: none;
  }
`;
const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  height: 40%;
`;

const LinkContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryName = styled(StyledH1)``;

const Line = styled.div`
  border-bottom: 1px solid #f8e9e7;
  width: 100%;
`;

const Menu = ({ isOpen, categories }: { isOpen: boolean; categories: CategoryConfiguration[] }) => {
  return (
    <MenuContainer isOpen={isOpen}>
      <CategoriesContainer>
        {categories.length &&
          categories.map((category, key) => (
            <LinkContainer key={key}>
              <Link href={`/categories/${category.searchName}`} passHref>
                <CategoryName>{category.name}</CategoryName>
              </Link>
            </LinkContainer>
          ))}
      </CategoriesContainer>
      <Line />
      <FooterMobileDesktopLinks isFooter={false} />
    </MenuContainer>
  );
};

export default Menu;
