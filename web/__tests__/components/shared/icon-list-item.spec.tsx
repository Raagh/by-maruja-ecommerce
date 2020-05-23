import { shallow } from 'enzyme';
import React from 'react';
import IconListItem from '../../../src/components/shared/icon-list-item';

describe('IconAndText component', () => {
  it('should render', () => {
    const image = '';
    const text = '';
    const alt = '';
    const wrapper = shallow(<IconListItem image={image} text={text} alt={alt} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should display the correct icon', () => {
    const image = '/assets/Warehouse-delivery.svg';
    const text = '';
    const alt = '';
    const wrapper = shallow(<IconListItem image={image} text={text} alt={alt} />);

    expect(wrapper.render().find('img').length).toEqual(1);
    expect(wrapper.render().find('img')[0].attribs.src).toEqual(image);
  });

  it('should assign the correct alt text to the icon', () => {
    const image = '';
    const text = '';
    const alt = 'alt text';
    const wrapper = shallow(<IconListItem image={image} text={text} alt={alt} />);

    expect(wrapper.render().find('img')[0].attribs.alt).toEqual(alt);
  });

  it('should display the correct text', () => {
    const image = '';
    const text = 'Correct text';
    const alt = '';
    const wrapper = shallow(<IconListItem image={image} text={text} alt={alt} />);

    expect(wrapper.render().find('p').length).toEqual(1);
    expect(wrapper.text()).toContain(text);
  });
});
