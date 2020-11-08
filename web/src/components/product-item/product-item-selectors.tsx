import React from 'react';

import styled from 'styled-components';
import { device } from '../../config/device';

import { BodyCopyRegularSmall, CaptionSmall, LabelSmall } from '../../config/global-styled-components';
import { colors, fonts } from '../../config/global-styles';
import { Product } from '../../model/product';
import { calculateProductStock } from '../shared/utilities';

import ProductItemSizesSelect from './product-item-sizes-select';

const ItemExtraQualities = styled.p`
  font-family: ${fonts.secondary.regular.name};
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 1px;
  color: ${colors.ui.grey50percent};
  text-transform: uppercase;
`;

const ItemExtraQualityRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;

  @media ${device.large} {
    padding-top: 1.5rem;
  }
`;

const FakeSelect = styled.div<{ onlyOneItem: boolean }>`
  background: ${colors.ui.grey10percent};
  border-radius: 8px;
  width: 168px;
  height: 42px;
  border: ${colors.ui.grey10percent};
  display: flex;
  flex-direction: row;
  align-items: center;
  ${(props) => (props.onlyOneItem ? 'justify-content:center;' : 'justify-content: space-between;')};

  padding: 0.8rem 1rem 0.8rem 1rem;
`;

const StyledButton = styled.button`
  border: none;
  background: ${colors.ui.grey10percent};
`;

const ProductItemDescription = styled(BodyCopyRegularSmall)`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1px;
  padding-top: 1rem;

  @media ${device.large} {
    padding-top: 1.5rem;
  }
`;

const StyledNoMoreStock = styled(CaptionSmall)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: ${colors.ui.error};

  @media ${device.large} {
    text-align: right;
  }
`;

const ProductItemSelectors = ({
  product,
  quantity,
  size,
  setQuantity,
  setSize,
}: {
  product: Product;
  quantity: number;
  size: string;
  setQuantity: (quantity: number) => void;
  setSize: (size: string) => void;
}) => {
  const hasSizes = product.sizeChart !== undefined;
  const productStock = calculateProductStock(product);

  return (
    <section>
      <ProductItemDescription>{product.description}</ProductItemDescription>
      <ItemExtraQualityRow>
        <ItemExtraQualities>Cantidad</ItemExtraQualities>
        <FakeSelect onlyOneItem={productStock === 1}>
          {productStock !== 1 && (
            <StyledButton onClick={() => setQuantity(quantity - 1)} autoFocus={false}>
              -
            </StyledButton>
          )}
          <LabelSmall>{quantity}</LabelSmall>

          {productStock !== 1 && (
            <StyledButton onClick={() => setQuantity(quantity + 1)} autoFocus={false}>
              +
            </StyledButton>
          )}
        </FakeSelect>
      </ItemExtraQualityRow>
      {productStock !== 1 && productStock === quantity && (
        <StyledNoMoreStock>Esta es la cantidad maxima disponible para este producto</StyledNoMoreStock>
      )}
      {hasSizes && (
        <ProductItemSizesSelect
          selectedSize={size}
          setSelectedSize={(internalSize: string) => setSize(internalSize)}
          product={product}
        />
      )}
    </section>
  );
};

export default ProductItemSelectors;
