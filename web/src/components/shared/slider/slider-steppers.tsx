import React from 'react';
import styled from 'styled-components';
import { RecommendedConfiguration } from '../../../model/recommended-configuration';
import { SliderContentConfiguration } from '../../../model/slider-content-configuration';
import SliderIndividualStepper from './slider-individual-stepper';

const SteppersContainer = styled.article`
  margin: 3.75rem 0 3.75rem 0;
`;

const createStepper = (key: string, index: number, styles: SliderContentConfiguration) => {
  let productSelected = false;
  const lowerLimit = (styles.sliderContainerPadding + styles.imageMargin) * 16 + styles.width / 2;
  const imageAndMarginWidth = styles.width + styles.imageMargin * 16;
  const minTranslatePositionForVisibleProduct = lowerLimit + (index - 1) * imageAndMarginWidth;
  const productIsMostVisible =
    styles.translateValue > minTranslatePositionForVisibleProduct &&
    styles.translateValue < minTranslatePositionForVisibleProduct + imageAndMarginWidth;

  if (productIsMostVisible) productSelected = true;
  return <SliderIndividualStepper chosen={productSelected} key={key + index} />;
};

const SliderSteppers = ({ values, images }: { values: SliderContentConfiguration; images: Array<RecommendedConfiguration> }) => {
  return <SteppersContainer>{images && images.map((image, index) => createStepper(image.name, index, values))}</SteppersContainer>;
};

export default SliderSteppers;
