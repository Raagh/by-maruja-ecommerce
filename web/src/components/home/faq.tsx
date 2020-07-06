import React from 'react';
import styled from 'styled-components';
import Button from '../shared/button';
import Accordion from '../shared/accordion';
import { AlignedCenterContainer } from '../../config/global-styled-components';
import { StyledH2 } from '../../config/global-styled-components';
import FaqJson from '../../config/faq-conf.json';

const FaqContainer = styled(AlignedCenterContainer)`
  margin-top: 80px;
`;

const createAccordionContent = (question: string, answer: string, index: number) => {
  console.log(question, answer);
  return <Accordion key={index} />;
};

const Faq = () => {
  return (
    <FaqContainer>
      <StyledH2>Preguntas frecuentes</StyledH2>
      {FaqJson.data.map((question, index) => createAccordionContent(question.question, question.answer, index))}
      <Button text={'LEER MÁS'} url={'/'} />
    </FaqContainer>
  );
};

export default Faq;
