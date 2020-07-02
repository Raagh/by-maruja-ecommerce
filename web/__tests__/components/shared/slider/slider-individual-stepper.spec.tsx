import { shallow } from 'enzyme';
import React from 'react';
import SliderIndividualStepper from '../../../../src/components/shared/slider/slider-individual-stepper';

describe('SliderIndividualSteppers component', () => {
  it('should render', () => {
    const wrapper = shallow(<SliderIndividualStepper chosen={false} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render an ellipse if image is not chosen', () => {
    const wrapper = shallow(<SliderIndividualStepper chosen={false} />);
    const ellipsePath = '/assets/Stepper-Ellipse.svg';

    expect(wrapper.prop('src')).toEqual(ellipsePath);
  });

  it('should render a rectangle if image is chosen', () => {
    const wrapper = shallow(<SliderIndividualStepper chosen={true} />);
    const rectanglePath = '/assets/Stepper-Rectangle.svg';

    expect(wrapper.prop('src')).toEqual(rectanglePath);
  });
});
