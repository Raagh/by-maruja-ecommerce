import { shallow } from 'enzyme';
import React from 'react';
import ProductList from '../../../src/components/categories/product-list';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { SanityImageSource as SanityImageSourceAsset } from '@sanity/asset-utils';
import ProductListItem from '../../../src/components/categories/product-list-item';

const products = [
  {
    name: 'string',
    price: 0,
    stock: 0,
    description: 'string',
    image: null as SanityImageSource,
    asset: null as SanityImageSourceAsset,
    tag: 'string',
  },
];

describe('ProductList component', () => {
  it('should render', () => {
    const wrapper = shallow(<ProductList categoryName="fakeCategory" products={products} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should display the title', () => {
    const wrapper = shallow(<ProductList categoryName="fakeCategory" products={products} />);

    expect(wrapper.render().find('h3').contents().toArray()[0].data).toBe('fakeCategory');
  });

  it('should display the 2 Product List Items', () => {
    const wrapper = shallow(<ProductList categoryName="fakeCategory" products={products} />);

    expect(wrapper.find(ProductListItem).length).toEqual(2);
  });
});
