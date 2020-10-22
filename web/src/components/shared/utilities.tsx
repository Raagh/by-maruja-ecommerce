import React from 'react';
import { DiscountFavoriteBadge, NoStockBadge, SteelBadge } from '../../config/global-styled-components';
import { Tags } from '../../model/filters/tags';
import { Product } from '../../model/product';

export const displayCorrectBadge = (product: Product) => {
  const realStock = calculateProductStock(product);

  if (realStock === 0) return <NoStockBadge>Sin stock</NoStockBadge>;
  if (realStock > 0 && (product.tag === Tags.Discount || product.tag === Tags.Favorite))
    return <DiscountFavoriteBadge>{product.tag}</DiscountFavoriteBadge>;
  if (realStock > 0 && product.tag === Tags.Steel) return <SteelBadge>{product.tag}</SteelBadge>;
};

export const calculateProductStock = (product: Product) =>
  product.sizeChart ? product.sizeChart.reduce((accu, curr, _) => accu + curr.stock, 0) : product.stock;
