import { shallow, mount } from 'enzyme';
import React from 'react';
import Hero from '../../../src/components/home/hero';

describe('Hero component', () => {
  it('should render', () => {
    const wrapper = shallow(<Hero />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should contain an img', () => {
    const wrapper = mount(<Hero />);

    expect(wrapper.find('img').exists()).toBeTruthy();
  });

  it('img src should be filled in', () => {
    const wrapper = mount(<Hero />);

    expect(wrapper.find('img').prop('src')).not.toEqual('');
  });
});