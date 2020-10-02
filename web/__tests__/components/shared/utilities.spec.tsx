import { calculateProductStock, displayCorrectBadge } from '../../../src/components/shared/utilities';
import React from 'react';

import { DiscountFavoriteBadge, NoStockBadge, SteelBadge } from '../../../src/config/global-styled-components';
import { mock as product } from '../../../__mocks__/product.mock';
import { Tags } from '../../../src/model/filters/tags';

describe('Utilities module', () => {
  it('calculateProductStock should return correct stock if there is no sizeChart', () => {
    product.stock = 3;
    product.sizeChart = undefined;

    const result = calculateProductStock(product);

    expect(result).toBe(3);
  });

  it('calculateProductStock should return correct stock if there is sizeChart', () => {
    product.sizeChart = [{ size: '1', stock: 1 }];
    const result = calculateProductStock(product);

    expect(result).toBe(1);
  });

  it('displayCorrectBadge should return NoStockBadge if stock is 0', () => {
    product.sizeChart = undefined;
    product.stock = 0;

    const result = displayCorrectBadge(product);

    expect(result.key).toBe((<NoStockBadge>Sin stock</NoStockBadge>).key);
  });

  it('displayCorrectBadge should return DiscountFavoriteBadge if stock > 0 and favorite', () => {
    product.sizeChart = undefined;
    product.stock = 0;
    product.tag = Tags.Favorite;

    const result = displayCorrectBadge(product);

    expect(result.key).toBe((<DiscountFavoriteBadge>{product.tag}</DiscountFavoriteBadge>).key);
  });

  it('displayCorrectBadge should return SteelBadge if stock > 0 and steel', () => {
    product.sizeChart = undefined;
    product.stock = 0;
    product.tag = Tags.Steel;

    const result = displayCorrectBadge(product);

    expect(result.key).toBe((<SteelBadge>{product.tag}</SteelBadge>).key);
  });
});
