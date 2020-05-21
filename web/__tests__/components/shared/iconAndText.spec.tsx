import { shallow } from 'enzyme';
import React from 'react';
import IconAndText from '../../../src/components/shared/iconAndText';

describe('IconAndText component', () => {
  it('should render', () => {
    const image = '';
    const text = '';
    const wrapper = shallow(<IconAndText image={image} text={text} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should display the correct icon', () => {
    const image = '/assets/Warehouse-delivery.svg';
    const text = '';
    const wrapper = shallow(<IconAndText image={image} text={text} />);

    expect(wrapper.render().find('img').length).toEqual(1);
    expect(wrapper.render().find('img')[0].attribs.src).toEqual(image);
  });

  it('should display the correct text', () => {
    const image = '';
    const text = 'Correct text';
    const wrapper = shallow(<IconAndText image={image} text={text} />);

    expect(wrapper.render().find('p').length).toEqual(1);
    expect(wrapper.text()).toContain(text);
  });
});
