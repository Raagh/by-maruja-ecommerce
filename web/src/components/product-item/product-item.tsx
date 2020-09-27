import Link from 'next/link';
import React, { CSSProperties } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

import {
  BodyCopyRegularSmall,
  CaptionSmall,
  LabelLargeBold,
  StyledH3Title,
} from '../../config/global-styled-components';
import { colors } from '../../config/global-styles';
import { Tags } from '../../model/filters/tags';

import { Product } from '../../model/product';
import RemoteFixedSizeImage from '../shared/image-types/remote-fixed-size-image';
import { displayCorrectBadge } from '../shared/utilities';

const ProductItemContainer = styled.section`
  display: block;
  padding: 1.5rem;
`;

const ProductItemImage = styled(RemoteFixedSizeImage)`
  border-radius: 2px;
  height: 360px;
  object-fit: cover;
`;

const PaddedImageContainer = styled.div`
  padding: 0 0.7rem 0 0;
  background-color: ${colors.ui.whiteBackground};
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
`;

const BackCaption = styled(CaptionSmall)`
  padding: 0.8rem 0 0.8rem 0;
  color: ${colors.ui.darkSurface};
  padding-left: 4px;
`;

const LinkImg = styled.img`
  height: 16px;
  width: 16px;
  padding-bottom: 1px;
`;

const ProductItemTitle = styled(StyledH3Title)`
  padding-top: 1.5rem;
  padding-bottom: 1rem;
`;

const PriceDisplay = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: row;
`;

const ProductItemPrice = styled(LabelLargeBold)``;

const ProductItemDiscountPrice = styled(LabelLargeBold)`
  padding-left: 0.5rem;
  color: ${colors.ui.grey50percent};
  text-decoration-line: line-through;
`;

const ProductItemDescription = styled(BodyCopyRegularSmall)`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1px;
  padding-top: 1rem;
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

const ProductItemDisplay = ({ product }: { product: Product }) => {
  return (
    <ProductItemContainer>
      <Link href="/categories/productos" passHref>
        <BackButton>
          <LinkImg src="/assets/Arrow-Back.svg" alt="arrow" />
          <BackCaption>Volver al listado</BackCaption>
        </BackButton>
      </Link>

      <Carousel
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
      <ProductItemTitle>{product.name}</ProductItemTitle>
      <PriceDisplay>
        <ProductItemPrice>${product.price}</ProductItemPrice>
        {product.tag === Tags.Discount && <ProductItemDiscountPrice>${product.price}</ProductItemDiscountPrice>}
      </PriceDisplay>
      <ProductItemDescription>{product.description}</ProductItemDescription>
    </ProductItemContainer>
  );
};

export default ProductItemDisplay;
