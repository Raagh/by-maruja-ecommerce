import { mount, shallow } from 'enzyme';

import React from 'react';
import ProductItemForm from '../../../src/components/product-item/product-item-form';
import ProductItemSelectors from '../../../src/components/product-item/product-item-selectors';
import PrimaryButton from '../../../src/components/shared/primary-button';
import MP from '../../../src/config/mercado-pago';

import { mock as product } from '../../../__mocks__/product.mock';

describe('ProductItemForm component', () => {
  it('should render', () => {
    const wrapper = shallow(<ProductItemForm product={product} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render all main components component', () => {
    const wrapper = mount(<ProductItemForm product={product} />);

    expect(wrapper.find('img').length).toBe(2);
    expect(wrapper.find('p').length).toBe(5);
    expect(wrapper.find('button').length).toBe(6);
    expect(wrapper.find('p').some((x) => x.text().includes(product.description)));
    expect(wrapper.find(PrimaryButton).length).toEqual(2);
    expect(wrapper.find(ProductItemSelectors).length).toEqual(1);
  });

  it('should call MercadoPago after the PrimaryButton is clicked', () => {
    const wrapper = mount(<ProductItemForm product={product} />);
    const mock = jest.spyOn(MP, 'confirmPurchase');

    wrapper.find(PrimaryButton).first().simulate('click');

    expect(mock).toHaveBeenCalledTimes(1);
  });
});
