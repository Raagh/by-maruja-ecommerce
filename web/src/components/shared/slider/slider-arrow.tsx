import React from 'react';
import styled from 'styled-components';
import { SliderArrowConfig } from '../../../model/slider-arrow-configuration';
import { device } from '../../../config/device';

const Arrow = styled.img<SliderArrowConfig>`
  position: absolute;
  top: 180px;
  background: url('/assets/Arrow.svg') no-repeat;
  background-size: cover;
  ${(props) => (props.direction === 'right' ? 'right: 25px;' : 'left: 25px;')}
  height: 20px;
  width: 78px;
  padding-left: 78px;
  ${(props) => (props.direction === 'right' ? '' : 'transform: scaleX(-1);')}
  
  @media ${device.large} {
    background: url('/assets/Circled-Arrow.svg') no-repeat;
    background-size: cover;
    height: 111px;
    width: 111px;
    padding-left: 111px;
  }
`;

const SliderArrow = (props: SliderArrowConfig) => {
  return <Arrow direction={props.direction} />;
};

export default SliderArrow;
