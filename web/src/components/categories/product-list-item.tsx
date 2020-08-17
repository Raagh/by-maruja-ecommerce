import React from 'react';

import styled from 'styled-components';

import { Product } from '../../model/product';
import RemoteFixedSizeImage from '../shared/image-types/remote-fixed-size-image';
import { LabelLarge, LabelLargeBold, CaptionSmall } from '../../config/global-styled-components';
import { colors } from '../../config/global-styles';

const ProductListItemContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem 2rem 1.5rem;
`;

const ProductItemTextContainer = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0.5rem 0 0.5rem;
`;

const ProductItemImage = styled(RemoteFixedSizeImage)`
  border-radius: 2px;
  max-height: 360px;
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

const StockBadge = styled(Badge)`
  background: ${colors.primary.dark};
`;

const ProductListItem = ({ product }: { product: Product }) => {
  return (
    <ProductListItemContainer>
      <ProductItemImageContainer>
        {product.stock === 0 && <NoStockBadge>Sin stock</NoStockBadge>}
        {product.stock > 0 && <StockBadge>{product.tag}</StockBadge>}
        <ProductItemImage image={product.image} alt={product.name} asset={product.asset} />
      </ProductItemImageContainer>
      <ProductItemTextContainer>
        <ProductItemName>{product.name}</ProductItemName>
        <ProductItemPrice>${product.price}</ProductItemPrice>
      </ProductItemTextContainer>
    </ProductListItemContainer>
  );
};

export default ProductListItem;
