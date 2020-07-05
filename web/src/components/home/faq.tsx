import React from 'react';
import styled from 'styled-components';
import Button from '../shared/button';
import { AlignedCenterContainer } from '../../config/global-styled-components';
import { StyledH2 } from '../../config/global-styled-components';

const FaqContainer = styled(AlignedCenterContainer)`
  margin-top: 80px;
`;

const Faq = () => {
  return (
    <FaqContainer>
      <StyledH2>Preguntas frecuentes</StyledH2>
      <Button text={'LEER MÁS'} url={'/'} />
    </FaqContainer>
  );
};

export default Faq;
