import Link from 'next/link';
import React from 'react';
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
import ProductItemCarousel from './product-item-carousel';

const ProductItemContainer = styled.section`
  display: block;
  padding: 1.5rem;
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
  align-items: center;
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

const TransparentBadge = styled(CaptionSmall)`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  color: ${colors.ui.grey75percent};

  border-radius: 100px;
  border: 1px solid ${colors.ui.grey50percent};
`;

const ProductItemDisplay = ({ product }: { product: Product }) => {
  return (
    <ProductItemContainer>
      <Link href="/categories/productos" passHref>
        <BackButton>
          <LinkImg src="/assets/Arrow-Back.svg" alt="arrow" />
          <BackCaption>Volver al listado</BackCaption>
        </BackButton>
      </Link>

      <ProductItemCarousel product={product} />
      <ProductItemTitle>{product.name}</ProductItemTitle>
      <PriceDisplay>
        {product.tag === Tags.Discount && <ProductItemPrice>${product.discountPrice}</ProductItemPrice>}
        {product.tag === Tags.Discount && <ProductItemDiscountPrice>${product.price}</ProductItemDiscountPrice>}
        {product.tag === Tags.Discount && (
          <TransparentBadge>{100 - (product.discountPrice * 100) / product.price} % off</TransparentBadge>
        )}
        {product.tag !== Tags.Discount && <ProductItemPrice>${product.price}</ProductItemPrice>}
      </PriceDisplay>
      <ProductItemDescription>{product.description}</ProductItemDescription>
    </ProductItemContainer>
  );
};

export default ProductItemDisplay;
