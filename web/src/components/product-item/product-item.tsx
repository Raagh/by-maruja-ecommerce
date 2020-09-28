import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';

import {
  BodyCopyRegularSmall,
  CaptionSmall,
  LabelLargeBold,
  LabelSmall,
  StyledH3Title,
} from '../../config/global-styled-components';
import { colors, fonts } from '../../config/global-styles';
import { Tags } from '../../model/filters/tags';

import { Product } from '../../model/product';
import Accordion from '../shared/accordion/accordion';

import Chevron from '../shared/chevron';
import PrimaryButton from '../shared/primary-button';
import { calculateProductStock } from '../shared/utilities';
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

const ItemExtraQualities = styled.p`
  font-family: ${fonts.primary};
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 1px;
  color: ${colors.ui.grey50percent};
  text-transform: uppercase;
`;

const ItemExtraQualityRow = styled.div`
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FakeSelect = styled.div`
  background: ${colors.ui.grey10percent};
  border-radius: 8px;
  width: 168px;
  height: 42px;
  border: ${colors.ui.grey10percent};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1rem 0.8rem 1rem;
`;

const SizeTable = styled(LabelSmall)`
  color: ${colors.ui.grey75percent};
  text-decoration: underline;
`;

const StyledButton = styled.button`
  border: none;
`;

const SizesTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PaddedPrimaryButton = styled.div`
  margin-top: 1rem;
`;

const ExtraPaddedPrimaryButton = styled.div`
  margin-top: 2rem;
`;

const DeliveryInformationContainer = styled.div`
  margin-top: 1rem;
`;

const ProductItemDisplay = ({ product }: { product: Product }) => {
  const [quantity, setQuanity] = useState(0);
  const [selectedSize, setSelectedSize] = useState('XS');

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
      <ItemExtraQualityRow>
        <ItemExtraQualities>Cantidad</ItemExtraQualities>
        <FakeSelect>
          <StyledButton onClick={() => setQuanity(quantity - 1)}>-</StyledButton>
          <LabelSmall>{quantity}</LabelSmall>
          <StyledButton onClick={() => setQuanity(quantity + 1)}>+</StyledButton>
        </FakeSelect>
      </ItemExtraQualityRow>
      {calculateProductStock(product) > 0 && (
        <ItemExtraQualityRow>
          <SizesTextContainer>
            <ItemExtraQualities>Talle</ItemExtraQualities>
            <Link href="adonde?" passHref>
              <SizeTable>Ver tabla de talles</SizeTable>
            </Link>
          </SizesTextContainer>

          <FakeSelect>
            <LabelSmall>{selectedSize}</LabelSmall>
            <StyledButton type="button" onClick={() => setSelectedSize('M')}>
              <Chevron isOpen={false} />
            </StyledButton>
          </FakeSelect>
        </ItemExtraQualityRow>
      )}
      <ExtraPaddedPrimaryButton>
        <PrimaryButton text="Comprar Ahora" url="mercadolink" />
      </ExtraPaddedPrimaryButton>
      <PaddedPrimaryButton>
        <PrimaryButton inverted text="Agregar al Carrito" url="mercadolink" />
      </PaddedPrimaryButton>
      <DeliveryInformationContainer>
        <Accordion title="Informacion sobre el pago" index={0} initialHiddenStatus>
          <div>CONTENIDO EXTRA</div>
        </Accordion>
        <Accordion title="Informacion sobre envios y entregas" index={0} initialHiddenStatus>
          <p>ESA INFO</p>
        </Accordion>
      </DeliveryInformationContainer>
    </ProductItemContainer>
  );
};

export default ProductItemDisplay;
