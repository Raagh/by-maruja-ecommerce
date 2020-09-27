import React from 'react';
import { DiscountFavoriteBadge, NoStockBadge, SteelBadge } from '../../config/global-styled-components';
import { Tags } from '../../model/filters/tags';
import { Product } from '../../model/product';

export const displayCorrectBadge = (product: Product) => {
  if (product.stock === 0) return <NoStockBadge>Sin stock</NoStockBadge>;
  if (product.stock > 0 && (product.tag === Tags.Discount || product.tag === Tags.Favorite))
    return <DiscountFavoriteBadge>{product.tag}</DiscountFavoriteBadge>;
  if (product.stock > 0 && product.tag === Tags.Steel) return <SteelBadge>{product.tag}</SteelBadge>;
};
