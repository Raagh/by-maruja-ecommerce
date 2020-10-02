import { mount, shallow } from 'enzyme';
import React from 'react';
import Sidebar from '../../../../src/components/shared/sidebar/sidebar';

describe('Sidebar component', () => {
  it('should render', () => {
    const wrapper = shallow(<Sidebar isOpen={false} clickHandler={() => {}} sidebarTitle="" />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should contain all elements', () => {
    const wrapper = mount(<Sidebar isOpen={true} clickHandler={() => {}} sidebarTitle="" />);

    expect(wrapper.find('div').length).toBe(4);
  });
});
