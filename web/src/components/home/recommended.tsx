import React from 'react';
import styled from 'styled-components';
import { AlignedCenterContainer } from '../../config/global-styled-components';
import { StyledH2 } from '../../config/global-styled-components';

const RecommendedContainer = styled(AlignedCenterContainer)`
  margin-top: 80px;
`;

const Recommended = () => {
  return (
    <RecommendedContainer>
      <StyledH2>Favoritos del mes</StyledH2>
    </RecommendedContainer>
  );
};

export default Recommended;
