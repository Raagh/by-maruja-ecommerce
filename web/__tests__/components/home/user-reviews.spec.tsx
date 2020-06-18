import { shallow, mount } from 'enzyme';
import React from 'react';
import UserReviews from '../../../src/components/home/user-reviews';
import { mock as userReviewMock } from '../../../__mocks__/user-reviews-configuration.mock';

describe('UserReviews component', () => {
  it('should render', () => {
    const wrapper = shallow(<UserReviews {...userReviewMock} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render 2 images', () => {
    const wrapper = mount(<UserReviews {...userReviewMock} />);

    expect(wrapper.find('img').length).toEqual(2);
  });

  it('should render 1 InstagramLogo', () => {
    const wrapper = mount(<UserReviews {...userReviewMock} />);

    expect(wrapper.find('img').at(0).prop('src')).toContain('Instagram.svg');
  });
});
