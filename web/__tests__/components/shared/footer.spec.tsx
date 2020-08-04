import { shallow } from 'enzyme';
import React from 'react';
import Footer from '../../../src/components/shared/footer';

describe('NavBar component', () => {
  it('should render', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render MercadoPago logo', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find('img').length).toBe(1);
  });
});
