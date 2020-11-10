import { shallow, mount } from 'enzyme';
import React from 'react';
import Faq from '../../../src/components/shared/faq';
import Button from '../../../src/components/shared/secondary-button';
import Accordion from '../../../src/components/shared/cart/accordion/accordion';
import FaqJson from '../../../src/config/faq-conf.json';

describe('Faq component', () => {
  it('should render', () => {
    const wrapper = shallow(<Faq />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render 1 title', () => {
    const wrapper = shallow(<Faq />);

    expect(wrapper.render().find('h3').length).toEqual(1);
  });

  it('should render an equal number of Accordions as questions/answers are in faq-conf.json file both for mobile and desktop', () => {
    const wrapper = mount(<Faq />);

    expect(wrapper.find(Accordion).length).toEqual(FaqJson.data.length * 2);
  });

  it('should render Button component', () => {
    const wrapper = mount(<Faq />);

    expect(wrapper.find(Button).length).toEqual(1);
  });
});
