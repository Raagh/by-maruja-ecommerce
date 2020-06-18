import { shallow, mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import SliderContent from '../../../../src/components/shared/slider/slider-content';
import SliderImage from '../../../../src/components/shared/slider/slider-image';
import { mock as recommendedMock } from '../../../../__mocks__/recommended-configuration.mock';

describe('SliderContent component', () => {
  const styles = { translateValue: 100, width: 100 };

  it('should render', () => {
    const wrapper = shallow(<SliderContent values={styles} images={recommendedMock} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('transform style should come from props', () => {
    const wrapper = mount(<SliderContent values={styles} images={recommendedMock} />);

    expect(wrapper.find('article')).toHaveStyleRule('transform', `translateX(${styles.translateValue}px)`);
  });

  it('width style should come from props', () => {
    const wrapper = mount(<SliderContent values={styles} images={recommendedMock} />);

    expect(wrapper.find('article')).toHaveStyleRule('width', `${styles.width * recommendedMock.length}px`);
  });

  it('should render as many SliderImages as images are in the recommended props array', () => {
    const wrapper = mount(<SliderContent values={styles} images={recommendedMock} />);

    expect(wrapper.find(SliderImage).length).toEqual(recommendedMock.length);
  });
});
