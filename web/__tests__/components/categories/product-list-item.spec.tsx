import { shallow } from 'enzyme';
import React from 'react';
import ProductListItem from '../../../src/components/categories/product-list-item';
import { Tags } from '../../../src/model/filters/tags';
import { mock as product } from '../../../__mocks__/product.mock';

describe('ProductListItem component', () => {
  it('should render', () => {
    const wrapper = shallow(<ProductListItem product={product} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should display discount badge', () => {
    let modifiedProduct = { ...product, stock: 1, tag: Tags.Discount };
    const wrapper = shallow(<ProductListItem product={modifiedProduct} />);

    expect(wrapper.render().find('div').children().toArray()[0].children[0].data).toContain('Descuento');
  });

  it('should display steel badge', () => {
    let modifiedProduct = { ...product, stock: 1, tag: Tags.Steel };
    const wrapper = shallow(<ProductListItem product={modifiedProduct} />);

    expect(wrapper.render().find('div').children().toArray()[0].children[0].data).toContain('Acero');
  });

  it('should display img', () => {
    let modifiedProduct = { ...product, stock: 1, tag: Tags.Steel };
    const wrapper = shallow(<ProductListItem product={modifiedProduct} />);

    expect(wrapper.render().find('img').length).toBe(1);
  });

  it('should display name', () => {
    let modifiedProduct = { ...product, stock: 1, tag: Tags.Steel };
    const wrapper = shallow(<ProductListItem product={modifiedProduct} />);

    expect(wrapper.render().find('p')[0].children[0].data).toBe('name');
  });

  it('should display price correctly', () => {
    let modifiedProduct = { ...product, stock: 1, tag: Tags.Steel };
    const wrapper = shallow(<ProductListItem product={modifiedProduct} />);

    expect(wrapper.render().find('p')[1].children[0].data).toBe('$-1');
  });
});
