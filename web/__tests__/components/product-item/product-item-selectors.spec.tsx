import { mount, shallow } from 'enzyme';

import React from 'react';
import ProductItemSelectors from '../../../src/components/product-item/product-item-selectors';
import ProductItemSizesSelect from '../../../src/components/product-item/product-item-sizes-select';

import { mock as product } from '../../../__mocks__/product.mock';

describe('ProductItemSelectors component', () => {
  it('should render', () => {
    const wrapper = shallow(
      <ProductItemSelectors product={product} quantity={1} size="xs" setQuantity={() => {}} setSize={() => {}} />
    );

    expect(wrapper.exists()).toBe(true);
  });

  it('should render all main components component', () => {
    const wrapper = mount(
      <ProductItemSelectors product={product} quantity={1} size="xs" setQuantity={() => {}} setSize={() => {}} />
    );

    expect(wrapper.find('img').length).toBe(2);
    expect(wrapper.find('p').length).toBe(5);
    expect(wrapper.find('button').length).toBe(2);
    expect(wrapper.find('p').some((x) => x.text().includes(product.description)));
    expect(wrapper.find('p').some((x) => x.text().includes('Cantidad')));
    expect(wrapper.find(ProductItemSizesSelect).length).toEqual(1);
  });
});
