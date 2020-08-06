import { shallow } from 'enzyme';
import React from 'react';
import Footer from '../../../src/components/shared/footer';

describe('NavBar component', () => {
  it('should render', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render MercadoPago logo, the payment options and the instagram logo', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.render().find('img').length).toBe(3);
  });

  it('should render links to Contacto, FAQ e instagram', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.render().find('a').length).toBe(3);
  });

  it('should render legal disclaimer', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.text()).toContain('© 2020 MARUJA');
  });
});
