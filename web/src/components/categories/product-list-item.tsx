import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';

import { LabelLarge, LabelLargeBold } from '../../config/global-styled-components';
import { Product } from '../../model/product';
import RemoteFixedSizeImage from '../shared/image-types/remote-fixed-size-image';
import { device } from '../../config/device';
import { displayCorrectBadge } from '../shared/utilities';

const ProductListItemContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem 2rem 1.5rem;
  flex: 1 0 21%;

  @media ${device.large} {
    max-width: 25%;
  }
`;

const ProductItemTextContainer = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0.5rem 0 0.5rem;
`;

const ProductItemImage = styled(RemoteFixedSizeImage)`
  border-radius: 2px;
  height: 360px;
  object-fit: cover;
`;

const ProductItemName = styled(LabelLarge)``;

const ProductItemPrice = styled(LabelLargeBold)``;

const ProductItemImageContainer = styled.div`
  position: relative;
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const ProductListItem = ({ product }: { product: Product }) => {
  const link = `/products/${product._id}`;
  return (
    <ProductListItemContainer>
      <ProductItemImageContainer>
        {displayCorrectBadge(product)}
        <Link href={link} passHref>
          <StyledLink>
            <ProductItemImage image={product.images[0].image} alt={product.name} asset={product.images[0].asset} />
          </StyledLink>
        </Link>
      </ProductItemImageContainer>
      <ProductItemTextContainer>
        <ProductItemName>{product.name}</ProductItemName>
        <ProductItemPrice>${product.price}</ProductItemPrice>
      </ProductItemTextContainer>
    </ProductListItemContainer>
  );
};

export default ProductListItem;
