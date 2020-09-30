import React, { useState } from 'react';

import styled from 'styled-components';

import { BodyCopyRegularSmall, LabelSmall } from '../../config/global-styled-components';
import { colors, fonts } from '../../config/global-styles';
import { Product } from '../../model/product';

import ProductItemSizeChart from './product-item-sizechart';
import ProductItemSizesSelect from './product-item-sizes-select';

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

const StyledButton = styled.button`
  border: none;
`;

const SizesTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProductItemDescription = styled(BodyCopyRegularSmall)`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1px;
  padding-top: 1rem;
`;

const ProductItemSelectors = ({ product }: { product: Product }) => {
  const [quantity, setQuanity] = useState(0);

  const hasSizes = product.sizeChart !== undefined;

  return (
    <article>
      <ProductItemDescription>{product.description}</ProductItemDescription>
      <ItemExtraQualityRow>
        <ItemExtraQualities>Cantidad</ItemExtraQualities>
        <FakeSelect>
          <StyledButton onClick={() => setQuanity(quantity - 1)}>-</StyledButton>
          <LabelSmall>{quantity}</LabelSmall>
          <StyledButton onClick={() => setQuanity(quantity + 1)}>+</StyledButton>
        </FakeSelect>
      </ItemExtraQualityRow>
      {hasSizes && (
        <ItemExtraQualityRow>
          <SizesTextContainer>
            <ItemExtraQualities>Talle</ItemExtraQualities>
            <ProductItemSizeChart />
          </SizesTextContainer>

          <ProductItemSizesSelect product={product} />
        </ItemExtraQualityRow>
      )}
    </article>
  );
};

export default ProductItemSelectors;
