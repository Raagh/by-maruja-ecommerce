import { mount, shallow } from 'enzyme';

import React from 'react';
import ProductItemSizeChart from '../../../src/components/product-item/product-item-sizechart';

describe('ProductItemSizeCharts component', () => {
  it('should render', () => {
    const wrapper = shallow(<ProductItemSizeChart />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render all main components component', () => {
    const wrapper = mount(<ProductItemSizeChart />);

    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('p').length).toBe(2);
    expect(wrapper.find('button').length).toBe(1);
    expect(
      wrapper
        .find('p')
        .some((x) =>
          x
            .text()
            .includes(
              'Medí el diámetro de un anillo que te guste y compará el tamaño en la tabla. El número dentro del anilo es tu talle.'
            )
        )
    );
    expect(wrapper.find('div').some((x) => x.text().includes('Ver tabla de talles')));
  });
});
