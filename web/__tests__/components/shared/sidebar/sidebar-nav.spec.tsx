import { mount, shallow } from 'enzyme';
import React from 'react';
import SidebarNav from '../../../../src/components/shared/sidebar/sidebar-nav';

describe('SidebarNav component', () => {
  it('should render', () => {
    const wrapper = shallow(<SidebarNav clickHandler={() => {}} sidebarTitle="" />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should contain all elements', () => {
    const wrapper = mount(<SidebarNav clickHandler={() => {}} sidebarTitle="title" />);

    expect(wrapper.find('div').length).toBe(2);
  });

  it('should contain sidebar title', () => {
    const wrapper = mount(<SidebarNav clickHandler={() => {}} sidebarTitle="title" />);

    expect(wrapper.find('p').first().text()).toBe('title');
  });
});
