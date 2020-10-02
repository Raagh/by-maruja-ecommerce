import React, { CSSProperties } from 'react';
import { Carousel } from 'react-responsive-carousel';
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
  padding: 0 0.7rem 0 0;
  background-color: ${colors.ui.whiteBackground};
`;

const customIndicators = (onClickHandler: any, isSelected: any, index: any, label: any) => {
  const indicatorStyles: CSSProperties = {
    background: '#E4C2BE',
    border: '1px solid #E4C2BE',
    boxSizing: 'border-box',
    width: 8,
    height: 8,
    display: 'inline-block',
    margin: '0 8px 1rem 0',
    borderRadius: 9999,
  };

  if (isSelected) {
    return (
      <li
        style={{ ...indicatorStyles, width: 45 }}
        aria-label={`Selected: ${label} ${index + 1}`}
        title={`Selected: ${label} ${index + 1}`}
      />
    );
  }
  return (
    <li
      style={indicatorStyles}
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      value={index}
      key={index}
      role="button"
      tabIndex={0}
      title={`${label} ${index + 1}`}
      aria-label={`${label} ${index + 1}`}
    />
  );
};

const ProductItemCarousel = ({ product, className }: { product: Product; className?: any }) => {
  return (
    <Carousel
      className={className}
      showThumbs={false}
      showStatus={false}
      showIndicators
      swipeable
      centerMode
      centerSlidePercentage={95}
      renderIndicator={customIndicators}
    >
      {product.images.map((image) => {
        return (
          <PaddedImageContainer key={product.name}>
            {displayCorrectBadge(product)}
            <ProductItemImage image={image.image} alt={product.name} asset={image.asset} />
          </PaddedImageContainer>
        );
      })}
    </Carousel>
  );
};

export default ProductItemCarousel;
