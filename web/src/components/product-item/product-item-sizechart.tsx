import React, { useState } from 'react';

import styled from 'styled-components';

import { BodyCopyRegularSmall, LabelSmall } from '../../config/global-styled-components';
import { colors } from '../../config/global-styles';

import Sidebar from '../shared/sidebar/sidebar';

const SizeTable = styled(LabelSmall)`
  color: ${colors.ui.grey75percent};
  text-decoration: underline;
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

const ProductItemSizeChart = () => {
  const [isSizeChartOpen, setSizeChartOpen] = useState(false);

  return (
    <article>
      <LinkedButton type="button" onClick={() => setSizeChartOpen(true)}>
        <SizeTable>Ver tabla de talles</SizeTable>
      </LinkedButton>

      <Sidebar isOpen={isSizeChartOpen} clickHandler={() => setSizeChartOpen(!isSizeChartOpen)} sidebarTitle="Talles">
        <SizesExplanation>
          Medí el diámetro de un anillo que te guste y compará el tamaño en la tabla. El número dentro del anilo es tu
          talle.
        </SizesExplanation>
        <img src="/assets/Sizes.png" alt="sizeChart" />
      </Sidebar>
    </article>
  );
};

export default ProductItemSizeChart;
