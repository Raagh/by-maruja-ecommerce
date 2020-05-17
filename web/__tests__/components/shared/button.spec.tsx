import { shallow } from 'enzyme';
import React from 'react';
import Button from '../../../src/components/shared/button';

describe('Button component', () => {
  it('should render', () => {
    const wrapper = shallow(<Button text="" />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should display the correct text', () => {
    const wrapper = shallow(<Button text="this is the correct text" />);

    expect(wrapper.render().text()).toContain('this is the correct text');
  });
});
