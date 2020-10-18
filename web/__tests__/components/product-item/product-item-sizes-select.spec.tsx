import { mount, shallow } from 'enzyme';

import React from 'react';
import ProductItemSizesSelect from '../../../src/components/product-item/product-item-sizes-select';
import Chevron from '../../../src/components/shared/chevron';
import { mock as product } from '../../../__mocks__/product.mock';

describe('ProductItemSizesSelect component', () => {
  it('should render', () => {
    const wrapper = shallow(<ProductItemSizesSelect product={product} selectedSize="" setSelectedSize={() => {}} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render all main components component', () => {
    const wrapper = mount(<ProductItemSizesSelect product={product} selectedSize="XS" setSelectedSize={() => {}} />);

    expect(wrapper.find('img').length).toBe(2);
    expect(wrapper.find('p').length).toBe(3);
    expect(wrapper.find('button').length).toBe(2);
    expect(wrapper.find('p').some((x) => x.text().includes('Talle')));
    expect(wrapper.find('div').some((x) => x.text().includes('XS')));
    expect(wrapper.find(Chevron).length).toEqual(1);
    expect(
      wrapper
        .find('p')
        .some((x) => x.text().includes('Dejanos tu email y te avisamos cuando esté disponible nuevamente'))
    );
  });
});
