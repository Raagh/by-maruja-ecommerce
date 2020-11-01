import React, { CSSProperties } from 'react';
import Carousel from 'react-multi-carousel';
import styled from 'styled-components';

import { Product } from '../../model/product';
import RemoteFixedSizeImage from '../shared/image-types/remote-fixed-size-image';
import { displayCorrectBadge } from '../shared/utilities';
import { colors } from '../../config/global-styles';

const ProductItemImage = styled(RemoteFixedSizeImage)`
  border-radius: 2px;
  height: 360px;
  object-fit: cover;
`;

const PaddedImageContainer = styled.div`
  margin: 0 0.7rem 0 0;
  background-color: ${colors.ui.whiteBackground};
`;

const CustomDots = ({ onClick, ...rest }: { onClick?: any; active?: boolean; index?: number }) => {
  const { active, index } = rest;

  const indicatorStyles: CSSProperties = {
    bottom: '-50px',
    background: '#E4C2BE',
    border: '1px solid #E4C2BE',
    boxSizing: 'border-box',
    width: 8,
    height: 8,
    display: 'inline-block',
    margin: '0 8px 1rem 0',
    borderRadius: 9999,
  };

  if (active) {
    return (
      <li
        style={{ ...indicatorStyles, width: 45, bottom: '-50px' }}
        aria-label={`Selected: ${index} ${index + 1}`}
        title={`Selected: ${index} ${index + 1}`}
      />
    );
  }
  return (
    <li
      style={indicatorStyles}
      onClick={onClick}
      onKeyDown={onClick}
      value={index}
      key={index}
      role="button"
      tabIndex={0}
      title={`${index} ${index + 1}`}
      aria-label={`${index} ${index + 1}`}
    />
  );
};

const responsive = {
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

const ProductItemCarousel = ({ product, className }: { product: Product; className?: any }) => {
  return (
    <Carousel
      className={className}
      responsive={responsive}
      showDots
      arrows={false}
      customDot={<CustomDots />}
      partialVisible
      partialVisbile
    >
      {product.images.map((image) => {
        return (
          <PaddedImageContainer key={product.name}>
            {displayCorrectBadge(product, true)}
            <ProductItemImage image={image.image} alt={product.name} asset={image.asset} />
          </PaddedImageContainer>
        );
      })}
    </Carousel>
  );
};

export default ProductItemCarousel;
