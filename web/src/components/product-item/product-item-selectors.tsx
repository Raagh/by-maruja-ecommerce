import React, { useState } from 'react';

import styled from 'styled-components';

import { BodyCopyRegularSmall, LabelSmall } from '../../config/global-styled-components';
import { colors, fonts } from '../../config/global-styles';
import { Product } from '../../model/product';
import Chevron from '../shared/chevron';
import Sidebar from '../shared/sidebar/sidebar';
import { calculateProductStock } from '../shared/utilities';

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

const ProductItemDescription = styled(BodyCopyRegularSmall)`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1px;
  padding-top: 1rem;
`;

const LinkedButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const SizesExplanation = styled(BodyCopyRegularSmall)`
  margin: 2rem;
`;

const ProductItemSelectors = ({ product }: { product: Product }) => {
  const [quantity, setQuanity] = useState(0);
  const [selectedSize, setSelectedSize] = useState('XS');
  const [isSizeChartOpen, setSizeChartOpen] = useState(false);

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
      {calculateProductStock(product) > 0 && (
        <ItemExtraQualityRow>
          <SizesTextContainer>
            <ItemExtraQualities>Talle</ItemExtraQualities>
            <LinkedButton type="button" onClick={() => setSizeChartOpen(true)}>
              <SizeTable>Ver tabla de talles</SizeTable>
            </LinkedButton>

            <Sidebar
              isOpen={isSizeChartOpen}
              clickHandler={() => setSizeChartOpen(!isSizeChartOpen)}
              sidebarTitle="Talles"
            >
              <SizesExplanation>
                Medí el diámetro de un anillo que te guste y compará el tamaño en la tabla. El número dentro del anilo
                es tu talle.
              </SizesExplanation>
              <img src="/assets/Sizes.png" alt="sizeChart" />
            </Sidebar>
          </SizesTextContainer>

          <FakeSelect>
            <LabelSmall>{selectedSize}</LabelSmall>
            <StyledButton type="button" onClick={() => setSelectedSize('M')}>
              <Chevron isOpen={false} />
            </StyledButton>
          </FakeSelect>
        </ItemExtraQualityRow>
      )}
    </article>
  );
};

export default ProductItemSelectors;
