import React from 'react';
import styled from 'styled-components';
import { SliderContentConfiguration } from '../../../model/slider-content-configuration';
import SliderImage from './slider-image';
import { RecommendedConfiguration } from '../../../model/recommended-configuration';

const SliderContentContainer = styled.article<SliderContentConfiguration>`
  transform: translateX(${(props) => props.translateValue}px);
  height: 90%;
  width: ${(props) => props.width}px;
  display: flex;
`;

const createImages = (image: RecommendedConfiguration, index: number, width: number) => {
  return <SliderImage remoteImage={image} width={width} key={index} />;
};

const SliderContent = ({ values, images }: { values: SliderContentConfiguration; images: Array<RecommendedConfiguration> }) => {
  return (
    <SliderContentContainer translateValue={values.translateValue} width={images && values.width * images.length}>
      {images && images.map((image, index) => createImages(image, index, values.width))}
    </SliderContentContainer>
  );
};

export default SliderContent;
