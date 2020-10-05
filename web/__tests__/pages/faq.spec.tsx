import React from 'react';
import { shallow, mount } from 'enzyme';

import FaqPage from '../../src/pages/faq';
import Faq from '../../src/components/shared/faq';
import { mock as categoriesMock } from '../../__mocks__/categories-configuration.mock';

describe('Faq Page', () => {
  it('should render', () => {
    const wrapper = shallow(<FaqPage categories={categoriesMock} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render Faq component twice (Once in Menu and once in page)', () => {
    const wrapper = mount(<FaqPage categories={categoriesMock} />);

    expect(wrapper.find(Faq).length).toBe(2);
  });
});
