import React, { useState } from 'react';

import styled from 'styled-components';

import { LabelSmall } from '../../config/global-styled-components';
import { colors } from '../../config/global-styles';
import { Product } from '../../model/product';
import Chevron from '../shared/chevron';

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

const DropdownList = styled.div`
  background: ${colors.ui.grey10percent};
  border: ${colors.ui.grey10percent};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1rem 0.8rem 1rem;
  border-radius: 8px;
`;

const DropdownListItem = styled.div``;

const ProductItemSizesSelect = ({ product }: { product: Product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizeChart ? product.sizeChart[0].size : '');

  return (
    <section>
      <FakeSelect>
        <LabelSmall>{selectedSize}</LabelSmall>
        <StyledButton type="button" onClick={() => setIsOpen(!isOpen)}>
          <Chevron isOpen={false} />
        </StyledButton>
      </FakeSelect>
      {isOpen && (
        <DropdownList>
          {product.sizeChart?.map((x) => (
            <DropdownListItem onClick={() => setSelectedSize(x.size)} key={x.size}>
              {x.size}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </section>
  );
};

export default ProductItemSizesSelect;
