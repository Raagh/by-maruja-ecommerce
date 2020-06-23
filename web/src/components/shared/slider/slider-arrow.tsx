import React from 'react';
import styled from 'styled-components';
import { SliderArrowConfig } from '../../../model/slider-arrow-configuration';

const Arrow = styled.img<SliderArrowConfig>`
  display: flex;
  position: absolute;
  top: 180px;
  ${(props) => (props.direction === 'right' ? 'right: 25px;' : 'left: 25px;')}
  height: 20px;
  width: 78px;
  ${(props) => props.direction === 'left' && 'transform: scaleX(-1)'}
`;

const SliderArrow = (props: SliderArrowConfig) => {
  return <Arrow src="/assets/Arrow.svg" direction={props.direction} />;
};

export default SliderArrow;
