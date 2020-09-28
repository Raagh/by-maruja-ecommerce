import { shallow } from 'enzyme';
import React from 'react';
import ProductList from '../../../src/components/categories/product-list';
import { mock as product } from '../../../__mocks__/product.mock';
import ProductListItem from '../../../src/components/categories/product-list-item';

const products = [product];

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
