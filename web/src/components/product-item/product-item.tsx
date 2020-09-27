import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

import { Product } from '../../model/product';
import RemoteFixedSizeImage from '../shared/image-types/remote-fixed-size-image';

const ProductItemContainer = styled.section`
  display: block;
  padding: 1rem;
`;

const ProductItemImage = styled(RemoteFixedSizeImage)`
  border-radius: 2px;
  height: 360px;
  object-fit: cover;
`;

const PaddedImageContainer = styled.div`
  padding: 0 1rem 0 1rem;
  background-color: white;
`;

const ProductItemDisplay = ({ product }: { product: Product }) => {
  return (
    <ProductItemContainer>
      {product.name}
      <Carousel showThumbs={false} showStatus={false} showArrows showIndicators swipeable={true} centerMode={true}>
        <PaddedImageContainer>
          <ProductItemImage image={product.image} alt={product.name} asset={product.asset} />
        </PaddedImageContainer>
        <PaddedImageContainer>
          <ProductItemImage image={product.image} alt={product.name} asset={product.asset} />
        </PaddedImageContainer>
        <PaddedImageContainer>
          <ProductItemImage image={product.image} alt={product.name} asset={product.asset} />
        </PaddedImageContainer>
      </Carousel>
    </ProductItemContainer>
  );
};

export default ProductItemDisplay;
