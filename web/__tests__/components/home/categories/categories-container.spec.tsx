import { shallow, mount } from 'enzyme';
import React from 'react';
import CategoriesContainer from '../../../../src/components/home/categories/categories-container';

import { mock as categoriesMock } from '../../../../__mocks__/categories-configuration.mock';

describe('CategoriesContainer component', () => {
  it('should render', () => {
    const wrapper = shallow(<CategoriesContainer categories={categoriesMock} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render 2 columns of categories', () => {
    const wrapper = shallow(<CategoriesContainer categories={categoriesMock} />);

    expect(wrapper.render().find('article').length).toEqual(2);
  });

  it('each category shoul have two images', () => {
    const wrapper = mount(<CategoriesContainer categories={categoriesMock} />);

    expect(wrapper.render().find('img').length).toEqual(8);
  });
});
