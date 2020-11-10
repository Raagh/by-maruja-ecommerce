import React, { useState } from 'react';

import styled from 'styled-components';

import { LabelSmall } from '../../config/global-styled-components';
import { colors, fonts } from '../../config/global-styles';
import { Product } from '../../model/product';
import Chevron from '../shared/chevron';

import ProductItemSizeChart from './product-item-sizechart';

const FakeSelect = styled.div<{ isOpen: boolean }>`
  background: ${colors.ui.grey10percent};
  border-radius: ${(props) => (props.isOpen ? '0px' : '8px')};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  user-select: none;
`;

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
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DropdownList = styled.div<{ isOpen: boolean }>`
  background: ${colors.ui.grey10percent};
  border: ${colors.ui.grey10percent};
  flex-direction: column;
  border-radius: 8px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  width: 168px;
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: absolute;
  transition: all 0.5s ease;
`;

const SizesTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DropdownListItem = styled.div`
  height: 42px;
  padding: 0.8rem 1rem 0.8rem 1rem;

  :hover {
    background-color: ${colors.ui.grey25percent} !important;
  }
`;

const DropwdownListContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ProductItemSizesSelect = ({
  product,
  selectedSize,
  setSelectedSize,
}: {
  product: Product;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <ItemExtraQualityRow>
        <SizesTextContainer>
          <ItemExtraQualities>Talle</ItemExtraQualities>
          <ProductItemSizeChart />
        </SizesTextContainer>
        <FakeSelect isOpen={isOpen}>
          <LabelSmall>{selectedSize}</LabelSmall>
          <StyledButton type="button" onClick={() => setIsOpen(!isOpen)}>
            <Chevron isOpen={false} />
          </StyledButton>
        </FakeSelect>
      </ItemExtraQualityRow>

      {isOpen && (
        <DropwdownListContainer>
          <DropdownList isOpen={isOpen}>
            {product.sizeChart?.map((x) => (
              <DropdownListItem
                onClick={() => {
                  setSelectedSize(x.size);
                  setIsOpen(!isOpen);
                }}
                key={x.size}
              >
                <LabelSmall>{x.size}</LabelSmall>
              </DropdownListItem>
            ))}
          </DropdownList>
        </DropwdownListContainer>
      )}
    </section>
  );
};

export default ProductItemSizesSelect;
