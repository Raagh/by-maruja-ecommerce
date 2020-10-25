import React from 'react';
import styled from 'styled-components';
import { RecommendedConfiguration } from '../../../model/recommended-configuration';
import { AlignedCenterContainer, StyledH2 } from '../../../config/global-styled-components';
import { device } from '../../../config/device';
import RecommendedCarousel from './recommended-carousel';

const BackgroundContainer = styled(AlignedCenterContainer).attrs({
  style: {
    backgroundImageMobile: "url('/assets/Background-Slider.svg')",
    backgroundImageDesktop: "url('/assets/Background-Slider-Desktop.svg')",
  },
})`
  margin-top: 10rem;
  background-image: ${(props) => props.style.backgroundImageMobile};
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 100%;

  @media ${device.small} {
    margin-top: 5rem;
  }

  @media ${device.medium} {
    background-image: ${(props) => props.style.backgroundImageDesktop};
  }

  @media ${device.large} {
    padding: 0 0 4rem 0;
    background-image: ${(props) => props.style.backgroundImageDesktop};
  }
`;

const RecommendedContainer = styled.article`
  margin: auto;
  max-width: 1600px;
  padding-bottom: 4rem;

  @media ${device.large} {
    padding-left: 2rem;
    padding-bottom: 0;
  }
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

const StyledRecommendedCarousel = styled(RecommendedCarousel)``;

const Recommended = ({ recommended }: { recommended: Array<RecommendedConfiguration> }) => {
  return (
    <BackgroundContainer>
      <RecommendedContainer>
        <RecommendedTitle>Favoritos del mes</RecommendedTitle>
        <StyledRecommendedCarousel recommended={recommended} />
      </RecommendedContainer>
    </BackgroundContainer>
  );
};

export default Recommended;
