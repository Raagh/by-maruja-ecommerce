import React from 'react';
import styled from 'styled-components';
import { SliderContentConfiguration } from '../../../model/slider-content-configuration';
import SliderImage from './slider-image';
import { RecommendedConfiguration } from '../../../model/recommended-configuration';

const SliderContentContainer = styled.article<{ translateValue: number }>`
  transform: translateX(${(props) => -props.translateValue}px);
  height: 90%;
  display: flex;
  width: 100%;
`;

const createImages = (image: RecommendedConfiguration, index: number, width: number, margin: number) => {
  return <SliderImage remoteImage={image} width={width} key={index} margin={margin} />;
};

const SliderContent = ({ values, images }: { values: SliderContentConfiguration; images: Array<RecommendedConfiguration> }) => {
  return (
    <SliderContentContainer translateValue={values.translateValue}>
      {images && images.map((image, index) => createImages(image, index, values.width, values.imageMargin))}
    </SliderContentContainer>
  );
};

export default SliderContent;
