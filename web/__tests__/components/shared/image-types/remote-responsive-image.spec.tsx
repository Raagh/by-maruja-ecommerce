import { mount } from 'enzyme';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import RemoteResponsiveImage from '../../../../src/components/shared/image-types/remote-responsive-image';

const image = {
  image: '',
  alt: '',
  asset: '',
};

describe('RemoteResponsiveImage component', () => {
  it('should return a lazyloadimage component', () => {
    const wrapper = mount(<RemoteResponsiveImage {...image} />);

    expect(wrapper.find(LazyLoadImage).length).toBe(1);
  });

  it('should return a lazyloadimage component with filled in srcset', () => {
    const wrapper = mount(<RemoteResponsiveImage {...image} />);

    expect(wrapper.find(LazyLoadImage).prop('srcSet')).toContain('600w');
    expect(wrapper.find(LazyLoadImage).prop('srcSet')).toContain('1000w');
    expect(wrapper.find(LazyLoadImage).prop('srcSet')).toContain('2000w');
  });
});
