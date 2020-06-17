import React from 'react';
import styled from 'styled-components';
import Slider from '../shared/slider/slider';
import { RecommendedConfiguration } from '../../model/recommended-configuration';
import { AlignedCenterContainer } from '../../config/global-styled-components';
import { StyledH2 } from '../../config/global-styled-components';

const RecommendedContainer = styled(AlignedCenterContainer)`
  margin-top: 80px;
`;

const Recommended = ({ recommended }: { recommended: Array<RecommendedConfiguration> }) => {
  return (
    <RecommendedContainer>
      <StyledH2>Favoritos del mes</StyledH2>
      <Slider recommended={recommended} />
    </RecommendedContainer>
  );
};

export default Recommended;
