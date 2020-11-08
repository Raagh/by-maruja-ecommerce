import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {
  CaptionLarge,
  CaptionSmall,
  DiscountFavoriteBadge,
  LabelLargeBold,
  NoStockBadge,
  SteelBadge,
  StyledH3,
} from '../../config/global-styled-components';
import { colors, typography } from '../../config/global-styles';
import { Tags } from '../../model/filters/tags';
import { Product } from '../../model/product';

import ProductItemForm from './product-item-form';
import ProductItemCarousel from './product-item-carousel';
import PaymentDescription from '../shared/payment-description';
import { device } from '../../config/device';
import RemoteFixedSizeImage from '../shared/image-types/remote-fixed-size-image';
import ErrorAlert from '../shared/error-alert';
import ErrorData from '../../config/error-alert-conf.json';
import { calculateProductStock } from '../shared/utilities';

const ProductItemContainer = styled.section<{ extraPadding: boolean }>`
  display: block;
  padding: 1rem 1.5rem 1.5rem 1.5rem;

  margin: auto;
  max-width: 1600px;

  @media ${device.large} {
    padding: 2rem 4.5rem 4rem 4.5rem;
    display: flex;
    flex-direction: row;
    ${(props) => (props.extraPadding ? 'padding-bottom:10.5rem' : '')};
  }
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-bottom: 1rem;

  @media ${device.large} {
    padding-bottom: 2rem;
  }
`;

const BackCaption = styled(CaptionSmall)`
  color: ${colors.ui.darkSurface};
  padding-left: 4px;
  cursor: pointer;
  transition: ease-out 200ms;

  :hover {
    color: ${colors.primary.dark};
  }
`;

const LinkImg = styled.img`
  height: 16px;
  width: 16px;
  padding-bottom: 1px;
`;

const ProductItemTitle = styled(StyledH3)`
  max-width: 397px;

  @media ${device.large} {
    margin-bottom: 1rem;
    font-size: 40px;
  }
`;

const PriceDisplay = styled.div`
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
  margin-top: 1rem;
  @media ${device.large} {
    margin-top: 1.5rem;
  }
`;

const EmailInputContainer = styled.form`
  border: 1px solid ${colors.ui.darkSurface};
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
  border-left: 1px solid ${colors.ui.darkSurface};
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  :disabled {
    border: 2px solid ${colors.ui.grey25percent};
    background: ${colors.ui.grey25percent};
    user-select: none;
  }

  :hover {
    background: ${colors.primary.light};
  }
`;

const StyledCarousel = styled(ProductItemCarousel)`
  @media ${device.large} {
    display: none;
  }
`;

const ImageMozaic = styled.article<{ rows: number }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: ${(props) => `repeat(${props.rows}, 1fr);`};
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

const ProductTitlePrice = styled.section`
  padding-top: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${device.large} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const RelativeNoStock = styled(NoStockBadge)`
  display: none;
  @media ${device.large} {
    display: block;
    position: relative;
    top: 0;
    right: 0;
    margin-bottom: 1rem;
  }
`;

const RelativeDiscount = styled(DiscountFavoriteBadge)`
  display: none;
  @media ${device.large} {
    position: relative;
    display: block;
    top: 0;
    right: 0;
    margin-bottom: 1rem;
  }
`;

const RelativeSteel = styled(SteelBadge)`
  display: none;
  @media ${device.large} {
    position: relative;
    display: block;
    top: 0;
    right: 0;
    margin-bottom: 1rem;
  }
`;

const displayRelativeBadge = (product: Product) => {
  const realStock = calculateProductStock(product);

  if (realStock === 0) return <RelativeNoStock>Sin stock</RelativeNoStock>;
  if (realStock > 0 && (product.tag === Tags.Discount || product.tag === Tags.Favorite))
    return <RelativeDiscount>{product.tag}</RelativeDiscount>;

  if (realStock > 0 && product.tag === Tags.Steel) return <RelativeSteel>{product.tag}</RelativeSteel>;
};

const ProductItemDisplay = ({ product, hasStock }: { product: Product; hasStock: boolean }) => {
  const [showError, setShowError] = useState(false);
  const [email, setEmail] = useState('');

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email !== '') axios.post('/api/send-email', { email }).catch(() => setShowError(true));
  };

  const rows = Math.abs(product.images.length / 2);

  return (
    <ProductItemContainer extraPadding={rows === 1}>
      <section>
        <Link href="/categories/productos" passHref>
          <BackButton>
            <LinkImg src="/assets/Arrow-Back.svg" alt="arrow" />
            <BackCaption>Volver al listado</BackCaption>
          </BackButton>
        </Link>
        <ImageMozaic rows={rows}>
          {product.images.map((x, index) => (
            <StyledImage key={index} asset={x.asset} image={x.image} alt="product" />
          ))}
        </ImageMozaic>
        <StyledCarousel product={product} />
      </section>

      <ProductInformation>
        <ProductTitlePrice>
          {displayRelativeBadge(product)}
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
        </ProductTitlePrice>

        {hasStock && (
          <article>
            <ProductItemForm product={product} />
            <PaymentDescription />
          </article>
        )}
        {!hasStock && (
          <article>
            <NoStockMessage>Dejanos tu email y te avisamos cuando esté disponible nuevamente</NoStockMessage>
            <EmailInputContainer onSubmit={(e) => submitHandler(e)}>
              <EmailInput onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Tu email" />
              <SendEmailButton type="submit" disabled={email === ''}>
                <img src="/assets/Send-Email.svg" alt="send-email" />
              </SendEmailButton>
            </EmailInputContainer>
            <ErrorAlert isVisible={showError} title={ErrorData.email.title} subtitle={ErrorData.email.subtitle} />
          </article>
        )}
      </ProductInformation>
    </ProductItemContainer>
  );
};

export default ProductItemDisplay;
