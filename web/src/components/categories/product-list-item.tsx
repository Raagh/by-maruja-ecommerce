import React from 'react';

import styled from 'styled-components';

import Link from 'next/link';
import { Product } from '../../model/product';
import RemoteFixedSizeImage from '../shared/image-types/remote-fixed-size-image';
import { LabelLarge, LabelLargeBold, CaptionSmall } from '../../config/global-styled-components';
import { colors } from '../../config/global-styles';
import { Tags } from '../../model/filters/tags';
import { device } from '../../config/device';

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

const Badge = styled(CaptionSmall)`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1rem;

  position: absolute;
  right: 1rem;
  top: 1rem;
  border-radius: 100px;
`;

const NoStockBadge = styled(Badge)`
  background: ${colors.ui.grey50percent};
`;

const SteelBadge = styled(Badge)`
  background: ${colors.primary.default};
`;

const DiscountFavoriteBadge = styled(Badge)`
  background: ${colors.primary.dark};
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const ProductListItem = ({ product }: { product: Product }) => {
  const link = `/products/${product._id}`;
  return (
    <ProductListItemContainer>
      <ProductItemImageContainer>
        {product.stock === 0 && <NoStockBadge>Sin stock</NoStockBadge>}
        {product.stock > 0 && (product.tag === Tags.Discount || product.tag === Tags.Favorite) && (
          <DiscountFavoriteBadge>{product.tag}</DiscountFavoriteBadge>
        )}
        {product.stock > 0 && product.tag === Tags.Steel && <SteelBadge>{product.tag}</SteelBadge>}
        <Link href={link} passHref>
          <StyledLink>
            <ProductItemImage image={product.image} alt={product.name} asset={product.asset} />
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
