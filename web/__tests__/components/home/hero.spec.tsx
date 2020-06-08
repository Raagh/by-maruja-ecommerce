import { shallow, mount } from 'enzyme';
import React from 'react';
import Hero from '../../../src/components/home/hero';
import Button from '../../../src/components/shared/button';

jest.mock('../../../lib/sanity');

describe('Hero component', () => {
  it('should render', () => {
    const wrapper = shallow(<Hero title="" subtitle="" image="" buttonText="" buttonURL="" asset="" />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should contain an img', () => {
    const wrapper = mount(<Hero title="" subtitle="" image="" buttonText="" buttonURL="" asset="" />);

    expect(wrapper.find('img').exists()).toBeTruthy();
  });

  it('title should be filled in', () => {
    const wrapper = mount(<Hero title="title" subtitle="" image="" buttonText="" buttonURL="" asset="" />);

    expect(wrapper.find('h1').text()).toContain('title');
  });

  it('subtitle src should be filled in', () => {
    const wrapper = mount(<Hero title="" subtitle="subtitle" image="" buttonText="" buttonURL="" asset="" />);

    expect(wrapper.find('p').text()).toContain('subtitle');
  });

  it('buttonText src should be filled in', () => {
    const wrapper = mount(<Hero title="" subtitle="" image="" buttonText="text" buttonURL="" asset="" />);

    expect(wrapper.find(Button).prop('text')).toContain('text');
  });

  it('buttonURL src should be filled in', () => {
    const wrapper = mount(<Hero title="" subtitle="" image="" buttonText="" buttonURL="url" asset="" />);

    expect(wrapper.find(Button).prop('url')).toContain('url');
  });
});
