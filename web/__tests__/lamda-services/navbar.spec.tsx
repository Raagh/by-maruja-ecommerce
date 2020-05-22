import { shallow } from 'enzyme';
import React from 'react';
import NavBar from '../../src/components/shared/navbar';

describe('NavBar component', () => {
  it('should render', () => {
    const wrapper = shallow(<NavBar />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should display the menu, the logo and the bag', () => {
    const wrapper = shallow(<NavBar />);

    expect(wrapper.render().find('img').length).toEqual(3);
  });
});
