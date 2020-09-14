import React from 'react';
import styled from 'styled-components';
import Slider from '../shared/slider/slider';
import { RecommendedConfiguration } from '../../model/recommended-configuration';
import { AlignedCenterContainer, StyledH2 } from '../../config/global-styled-components';
import { device } from '../../config/device';

const BackgroundContainer = styled(AlignedCenterContainer)`
  margin-top: 10rem;
  background-image: url('/assets/Background-Slider.svg');
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 100%;

  @media ${device.small} {
    margin-top: 5rem;
  }

  @media ${device.medium} {
    background-image: url('/assets/Background-Slider-Desktop.svg');
  }

  @media ${device.large} {
    padding: 0 0 6.5rem 0;
    background-image: url('/assets/Background-Slider-Desktop.svg');
  }
`;

const RecommendedContainer = styled.article`
  margin: auto;
  max-width: 1600px;
`;

const RecommendedTitle = styled(StyledH2)`
  width: 150px;
  margin: 0 auto 2.75rem auto;
  @media ${device.large} {
    width: 100%;
    padding-left: 5vw;
    text-align: left;
  }
`;

const Recommended = ({ recommended }: { recommended: Array<RecommendedConfiguration> }) => {
  return (
    <BackgroundContainer>
      <RecommendedContainer>
        <RecommendedTitle>Favoritos del mes</RecommendedTitle>
        <Slider recommended={recommended} />
      </RecommendedContainer>
    </BackgroundContainer>
  );
};

export default Recommended;
