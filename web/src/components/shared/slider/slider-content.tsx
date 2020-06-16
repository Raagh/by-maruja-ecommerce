import React from 'react';
import styled from 'styled-components';
import { SliderContentConfiguration } from '../../../model/slider-content-configuration';

const SliderContentContainer = styled.article<SliderContentConfiguration>`
  transform: translateX(${(props) => props.translateValue}px);
  transition: transform ease-out ${(props) => props.transition}s;
  height: 90%;
  width: ${(props) => props.width}px;
  display: flex;
`;

const SliderContent = (props: SliderContentConfiguration) => {
  return <SliderContentContainer translateValue={props.translateValue} transition={props.transition} width={props.width} />;
};

export default SliderContent;
