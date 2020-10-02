import { mount } from 'enzyme';
import React from 'react';
import SidebarInternal from '../../../../src/components/shared/sidebar/sidebar-internal';
import SidebarNav from '../../../../src/components/shared/sidebar/sidebar-nav';

describe('SidebarInternal component', () => {
  it('should display all elements', () => {
    const wrapper = mount(<SidebarInternal isOpen={false} clickHandler={() => {}} sidebarTitle="title" />);

    expect(wrapper.find('div').length).toBe(3);
  });

  it('should render SidebarNav component', () => {
    const wrapper = mount(<SidebarInternal isOpen={false} clickHandler={() => {}} sidebarTitle="title" />);

    expect(wrapper.find(SidebarNav).length).toEqual(1);
  });
});
