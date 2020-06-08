/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallow, mount } from 'enzyme';
import React from 'react';
import CategoriesContainer from '../../../../src/components/home/categories/categories-container';

import { mock as categoriesMock } from '../../../../__mocks__/categories-configuration.mock';

describe('CategoriesContainer component', () => {
  it('should render', () => {
    const wrapper = shallow(<CategoriesContainer categories={categoriesMock} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render 3 columns of categories (2 mobile + 1 Desktop)', () => {
    const wrapper = shallow(<CategoriesContainer categories={categoriesMock} />);

    expect(wrapper.render().find('article').length).toEqual(3);
  });

  it('each category should have two images', () => {
    const wrapper = mount(<CategoriesContainer categories={categoriesMock} />);

    expect(wrapper.render().find('img').length).toEqual(16);
  });
});
