import React, { useState } from 'react';
import styled from 'styled-components';
import SliderContent from './slider-content';

const SliderContainer = styled.article`
  width: 100%;
`;

const Slider = () => {
  const getWidth = () => window.innerWidth;

  const [styles] = useState({
    translateValue: 0,
    transition: 0.5,
  });

  const { translateValue, transition } = styles;

  return (
    <SliderContainer>
      <SliderContent transition={transition} translateValue={translateValue} width={getWidth()} />
    </SliderContainer>
  );
};

export default Slider;
