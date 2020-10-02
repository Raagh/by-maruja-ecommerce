import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { CaptionLarge, CaptionSmall, LabelLargeBold, StyledH3Title } from '../../config/global-styled-components';
import { colors, typography } from '../../config/global-styles';
import { Tags } from '../../model/filters/tags';
import { Product } from '../../model/product';

import ProductItemForm from './product-item-form';
import ProductItemCarousel from './product-item-carousel';
import PaymentDescription from '../shared/payment-description';
import { device } from '../../config/device';
import RemoteFixedSizeImage from '../shared/image-types/remote-fixed-size-image';

const ProductItemContainer = styled.section`
  display: block;
  padding: 1.5rem;

  margin: auto;
  max-width: 1600px;

  @media ${device.large} {
    padding: 2rem 4.5rem 2rem 4.5rem;
    display: flex;
    flex-direction: row;
  }
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
`;

const BackCaption = styled(CaptionSmall)`
  padding: 0.8rem 0 0.8rem 0;
  color: ${colors.ui.darkSurface};
  padding-left: 4px;

  :hover {
    color: ${colors.primary.dark};
  }
`;

const LinkImg = styled.img`
  height: 16px;
  width: 16px;
  padding-bottom: 1px;
`;

const ProductItemTitle = styled(StyledH3Title)`
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  max-width: 397px;
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

const TransparentBadge = styled(CaptionSmall)`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  color: ${colors.ui.grey75percent};

  border-radius: 100px;
  border: 1px solid ${colors.ui.grey50percent};
`;

const NoStockMessage = styled(CaptionLarge)`
  margin-top: 0.8rem;
`;
const EmailInputContainer = styled.div`
  border: 1px solid #513232;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  height: 54px;
  margin-top: 1rem;
`;

const EmailInput = styled.input`
  width: 100%;
  font-family: ${typography.bodyCopy.regular.font.name};
  font-style: normal;
  font-weight: ${typography.bodyCopy.regular.fontWeight};
  font-size: ${typography.bodyCopy.regular.small.fontSize};
  line-height: ${typography.bodyCopy.regular.small.lineHeight};
  letter-spacing: ${typography.bodyCopy.regular.small.letterSpacing};
  color: ${colors.ui.darkSurface};
  padding: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;
`;

const SendEmailButton = styled.button`
  width: 60px;
  background: none;
  color: inherit;
  border: none;
  border-left: 1px solid #513232;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCarousel = styled(ProductItemCarousel)`
  @media ${device.large} {
    display: none;
  }
`;

const ImageMozaic = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1.2rem;
  margin-right: 4.5rem;

  @media ${device.small} {
    display: none;
  }

  @media ${device.medium} {
    display: none;
  }

  @media ${device.large} {
    display: grid;
  }
`;

const StyledImage = styled(RemoteFixedSizeImage)`
  width: 373px;
  height: 421px;
  object-fit: cover;

  @media ${device.medium} {
    height: 100%;
    width: 100%;
  }

  @media ${device.large} {
    height: 421px;
  }
`;

const ProductInformation = styled.section`
  @media ${device.xsmall} {
    width: 100%;
    width: 100%;
  }

  @media ${device.large} {
    margin-top: 0.7rem;
    width: 100%;
    width: 35%;
  }
`;

const ProductItemDisplay = ({ product, hasStock }: { product: Product; hasStock: boolean }) => {
  return (
    <ProductItemContainer>
      <section>
        <Link href="/categories/productos" passHref>
          <BackButton>
            <LinkImg src="/assets/Arrow-Back.svg" alt="arrow" />
            <BackCaption>Volver al listado</BackCaption>
          </BackButton>
        </Link>
        <ImageMozaic>
          {product.images.map((x, index) => (
            <StyledImage key={index} asset={x.asset} image={x.image} alt="product" />
          ))}
        </ImageMozaic>
        <StyledCarousel product={product} />
      </section>

      <ProductInformation>
        <ProductItemTitle>{product.name}</ProductItemTitle>
        <PriceDisplay>
          {product.tag === Tags.Discount && hasStock && <ProductItemPrice>${product.discountPrice}</ProductItemPrice>}
          {product.tag === Tags.Discount && hasStock && (
            <ProductItemDiscountPrice>${product.price}</ProductItemDiscountPrice>
          )}
          {product.tag === Tags.Discount && hasStock && (
            <TransparentBadge>{100 - (product.discountPrice * 100) / product.price} % off</TransparentBadge>
          )}
          {(product.tag !== Tags.Discount || !hasStock) && <ProductItemPrice>${product.price}</ProductItemPrice>}
        </PriceDisplay>
        {hasStock && (
          <article>
            <ProductItemForm product={product} />
            <PaymentDescription />
          </article>
        )}
        {!hasStock && (
          <article>
            <NoStockMessage>Dejanos tu email y te avisamos cuando esté disponible nuevamente</NoStockMessage>
            <EmailInputContainer>
              <EmailInput type="text" placeholder="Tu email" />
              <SendEmailButton type="button">
                <img src="/assets/Send-Email.svg" alt="send-email" />
              </SendEmailButton>
            </EmailInputContainer>
          </article>
        )}
      </ProductInformation>
    </ProductItemContainer>
  );
};

export default ProductItemDisplay;
