import { shallow } from 'enzyme';
import React from 'react';
import NavBar, { Bag, Logo, Menu } from '../../../src/components/shared/navBar';

describe('NavBar component', () => {
  it('should render', () => {
    const wrapper = shallow(<NavBar />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should display the menu, the logo and the bag', () => {
    const wrapper = shallow(<NavBar />);

    expect(wrapper.find(Bag).length).toEqual(1);
    expect(wrapper.find(Logo).length).toEqual(1);
    expect(wrapper.find(Menu).length).toEqual(1);
  });
});
