import { shallow } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import CartNav from '../../../../src/components/shared/sidebar/sidebar-nav';

describe('CartNav component', () => {
  let mockfn = jest.fn();

  it('should render', () => {
    const wrapper = shallow(<CartNav clickHandler={mockfn} sidebarTitle="" />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render an invisible div and a back-arrow image', () => {
    const wrapper = shallow(<CartNav clickHandler={mockfn} sidebarTitle="" />);

    expect(wrapper.render().find('div').length).toBe(2);
  });

  it('should render the title', () => {
    const wrapper = shallow(<CartNav clickHandler={mockfn} sidebarTitle="" />);

    expect(wrapper.render().find('p').length).toBe(1);
  });
});
