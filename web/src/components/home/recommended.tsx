import React from 'react';
import styled from 'styled-components';
import Slider from '../shared/slider/slider';
import { RecommendedConfiguration } from '../../model/recommended-configuration';
import { AlignedCenterContainer } from '../../config/global-styled-components';
import { StyledH2 } from '../../config/global-styled-components';
import { device } from '../../config/device';

const RecommendedContainer = styled(AlignedCenterContainer)`
  margin-top: 80px;
`;

const RecommendedTitle = styled(StyledH2)`
  width: 150px;
  margin: 0 auto 2.75rem auto;
  @media ${device.large} {
    width: 100%;
    padding-left: 6rem;
    text-align: left;
  }
`;

const Recommended = ({ recommended }: { recommended: Array<RecommendedConfiguration> }) => {
  return (
    <RecommendedContainer>
      <RecommendedTitle>Favoritos del mes</RecommendedTitle>
      <Slider recommended={recommended} />
    </RecommendedContainer>
  );
};

export default Recommended;
