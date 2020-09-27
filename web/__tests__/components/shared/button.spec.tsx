import { shallow } from 'enzyme';
import Link from 'next/link';
import React from 'react';
import Button from '../../../src/components/shared/secondary-button';

describe('Button component', () => {
  it('should render', () => {
    const wrapper = shallow(<Button text="" url="" />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should display the correct text', () => {
    const wrapper = shallow(<Button text="this is the correct text" url="" />);

    expect(wrapper.render().text()).toContain('this is the correct text');
  });

  it('should use the correct url', () => {
    const wrapper = shallow(<Button text="" url="/url" />);

    expect(wrapper.find(Link).props().href).toEqual('/url');
  });
});
