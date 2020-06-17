import React, { useState } from 'react';
import styled from 'styled-components';
import SliderContent from './slider-content';
import { RecommendedConfiguration } from '../../../model/recommended-configuration';

const SliderContainer = styled.article`
  width: 100vw;
  overflow: hidden;
`;

const Slider = ({ recommended }: { recommended: Array<RecommendedConfiguration> }) => {
  const getWidth = () => -200;

  const [styles] = useState({
    translateValue: 0,
    transition: 0.5,
    width: getWidth(),
  });

  return (
    <SliderContainer>
      <SliderContent values={styles} images={recommended} />
    </SliderContainer>
  );
};

export default Slider;
