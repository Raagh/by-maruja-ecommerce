import React from 'react';
import { shallow } from 'enzyme';

import TopicSelector from '../../../src/components/shared/topic-selector';
import JsonData from '../../../src/config/faq-page-conf.json';
import Sidebar from '../../../src/components/shared/sidebar/sidebar';
import Accordion from '../../../src/components/shared/cart/accordion/accordion';

describe('TopicSelector component', () => {
  it('should render', () => {
    const wrapper = shallow(<TopicSelector selection={JsonData[0]} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render Sidebar component', () => {
    const wrapper = shallow(<TopicSelector selection={JsonData[0]} />);

    expect(wrapper.find(Sidebar).length).toBe(1);
  });

  it('should renders one Accordion component for every question in faq-page-conf.json', () => {
    const wrapper = shallow(<TopicSelector selection={JsonData[0]} />);

    expect(wrapper.find(Accordion).length).toBe(JsonData.length);
  });
});
