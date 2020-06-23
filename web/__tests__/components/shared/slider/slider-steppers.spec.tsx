import { shallow, mount } from 'enzyme';
import React from 'react';
import SliderSteppers from '../../../../src/components/shared/slider/slider-steppers';
import SliderIndividualStepper from '../../../../src/components/shared/slider/slider-individual-stepper';
import { mock as recommendedMock } from '../../../../__mocks__/recommended-configuration.mock';
import { mock as stylesMock } from '../../../../__mocks__/styles-configuration.mock';

describe('SliderSteppers component', () => {
  it('should render', () => {
    const wrapper = shallow(<SliderSteppers images={recommendedMock} values={stylesMock} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render as many SliderIndividualStepper components as quantity received by props', () => {
    const wrapper = mount(<SliderSteppers images={recommendedMock} values={stylesMock} />);

    expect(wrapper.find(SliderIndividualStepper).length).toEqual(recommendedMock.length);
  });
});
