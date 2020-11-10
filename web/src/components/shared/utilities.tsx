import React from 'react';
import styled from 'styled-components';

import { DiscountFavoriteBadge, NoStockBadge, SteelBadge } from '../../config/global-styled-components';
import { Tags } from '../../model/filters/tags';
import { Product } from '../../model/product';

const ExtraRightNoStock = styled(NoStockBadge)`
  right: 1.7rem;
`;

const ExtraRightDiscount = styled(DiscountFavoriteBadge)`
  right: 1.7rem;
`;

const ExtraRightSteel = styled(SteelBadge)`
  right: 1.7rem;
`;

export const displayCorrectBadge = (product: Product, addExtraRight?: boolean) => {
  const realStock = calculateProductStock(product);

  if (realStock === 0)
    return addExtraRight ? <ExtraRightNoStock>Sin stock</ExtraRightNoStock> : <NoStockBadge>Sin stock</NoStockBadge>;
  if (realStock > 0 && (product.tag === Tags.Discount || product.tag === Tags.Favorite))
    return addExtraRight ? (
      <ExtraRightDiscount>{product.tag}</ExtraRightDiscount>
    ) : (
      <DiscountFavoriteBadge>{product.tag}</DiscountFavoriteBadge>
    );
  if (realStock > 0 && product.tag === Tags.Steel)
    return addExtraRight ? <ExtraRightSteel>{product.tag}</ExtraRightSteel> : <SteelBadge>{product.tag}</SteelBadge>;
};

export const calculateProductStock = (product: Product) =>
  product.sizeChart ? product.sizeChart.reduce((accu, curr, _) => accu + curr.stock, 0) : product.stock;
