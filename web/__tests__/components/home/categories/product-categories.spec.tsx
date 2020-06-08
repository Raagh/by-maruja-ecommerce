import { shallow, mount } from 'enzyme';
import React from 'react';
import ProductCategories from '../../../../src/components/home/categories/product-categories';

import { mock as categoriesMock } from '../../../../__mocks__/categories-configuration.mock';
import CategoriesContainer from '../../../../src/components/home/categories/categories-container';

describe('ProductCategories component', () => {
  it('should render', () => {
    const wrapper = shallow(<ProductCategories categories={categoriesMock} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render 1 title', () => {
    const wrapper = shallow(<ProductCategories categories={categoriesMock} />);

    expect(wrapper.render().find('h2').length).toEqual(1);
  });

  it('should render one categories container', () => {
    const wrapper = mount(<ProductCategories categories={categoriesMock} />);

    expect(wrapper.find(CategoriesContainer).length).toEqual(1);
  });
});
