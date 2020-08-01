import React from 'react';

import styled from 'styled-components';

import { Product } from '../../model/product';
import RemoteFixedSizeImage from '../shared/image-types/remote-fixed-size-image';
import { LabelLarge, LabelLargeBold } from '../../config/global-styled-components';

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

const ProductListItem = ({ product }: { product: Product }) => {
  return (
    <ProductListItemContainer>
      <ProductItemImage image={product.image} alt={product.name} asset={product.asset} />
      <ProductItemTextContainer>
        <ProductItemName>{product.name}</ProductItemName>
        <ProductItemPrice>${product.price}</ProductItemPrice>
      </ProductItemTextContainer>
    </ProductListItemContainer>
  );
};

export default ProductListItem;
