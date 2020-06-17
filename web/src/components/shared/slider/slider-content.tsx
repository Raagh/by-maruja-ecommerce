import React from 'react';
import styled from 'styled-components';
import { SliderContentConfiguration } from '../../../model/slider-content-configuration';
import SliderImage from './slider-image';
import { RecommendedConfiguration } from '../../../model/recommended-configuration';

const SliderContentContainer = styled.article<SliderContentConfiguration>`
  transform: translateX(${(props) => props.translateValue}px);
  transition: transform ease-out ${(props) => props.transition}s;
  height: 90%;
  width: ${(props) => props.width}px;
  display: flex;
`;

const createImages = (image: RecommendedConfiguration, index: number) => {
  return <SliderImage image={image.image} asset={image.asset} alt={image.name} key={index} />;
};

const SliderContent = ({ values, images }: { values: SliderContentConfiguration; images: Array<RecommendedConfiguration> }) => {
  return (
    <SliderContentContainer translateValue={values.translateValue} transition={values.transition} width={values.width * images.length}>
      {images.map((image, index) => createImages(image, index))}
    </SliderContentContainer>
  );
};

export default SliderContent;
