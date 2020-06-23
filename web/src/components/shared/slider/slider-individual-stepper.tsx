import React from 'react';
import styled from 'styled-components';

const IndividualStepperImage = styled.img`
  margin: 0 0.5rem 0 0.5rem;
`;

const SliderIndividualStepper = ({ chosen }: { chosen: boolean }) => {
  return <IndividualStepperImage src={chosen ? '/assets/Stepper-Rectangle.svg' : '/assets/Stepper-Ellipse.svg'} alt="stepper" />;
};

export default SliderIndividualStepper;
