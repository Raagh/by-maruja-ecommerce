import React from 'react';
import { shallow, mount } from 'enzyme';

import FaqPage from '../../src/pages/faq';
import TopicSelector from '../../src/components/shared/topic-selector';
import { mock as categoriesMock } from '../../__mocks__/categories-configuration.mock';
import JsonData from '../../src/config/faq-page-conf.json';

describe('Faq Page', () => {
  it('should render', () => {
    const wrapper = shallow(<FaqPage categories={categoriesMock} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render as many topicSelector components as there are objects in faq-page-conf.json', () => {
    const wrapper = mount(<FaqPage categories={categoriesMock} />);

    expect(wrapper.find(TopicSelector).length).toBe(JsonData.length);
  });
});
