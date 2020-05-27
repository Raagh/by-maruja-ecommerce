import { shallow } from 'enzyme';
import React from 'react';
import NavBar from '../../../src/components/shared/navBar';

describe('NavBar component', () => {
  it('should render', () => {
    const wrapper = shallow(<NavBar />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should display the menu, the logo and the bag', () => {
    const wrapper = shallow(<NavBar />);

    expect(wrapper.render().find('img').length).toEqual(3);
  });

  it('should include the links to products, contact, about and the cart', () => {
    const wrapper = shallow(<NavBar />);

    expect(wrapper.render().find('a').length).toEqual(4);
  });
});
