import { shallow } from 'enzyme';
import React from 'react';
import CategoriesContainer from '../../../../src/components/home/categories/categories-container';

describe('ShippingInfo component', () => {
  it('should render', () => {
    const wrapper = shallow(<CategoriesContainer />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render an h4', () => {
    const wrapper = shallow(<CategoriesContainer />);

    expect(wrapper.render().find('h4').length).toEqual(1);
  });

  it('should render 3 iconAndText components', () => {
    const wrapper = shallow(<CategoriesContainer />);

    expect(wrapper.find('IconListItem').length).toEqual(3);
  });
});
