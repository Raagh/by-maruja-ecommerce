import React from 'react';
import styled from 'styled-components';
import Button from '../shared/button';
import Accordion from '../shared/accordion/accordion';
import { AlignedCenterContainer } from '../../config/global-styled-components';
import { StyledH2 } from '../../config/global-styled-components';
import FaqJson from '../../config/faq-conf.json';

const FaqContainer = styled(AlignedCenterContainer)`
  margin-top: 80px;
`;

const FaqTitle = styled(StyledH2)`
  margin-bottom: 2.5rem;
`;

const createAccordionContent = (question: string, answer: string, index: number) => {
  return <Accordion question={question} answer={answer} key={index} index={index} />;
};

const Faq = () => {
  return (
    <FaqContainer>
      <FaqTitle>Preguntas frecuentes</FaqTitle>
      {FaqJson.data.map((question, index) => createAccordionContent(question.question, question.answer, index))}
      <Button text={'LEER MÁS'} url={'/'} />
    </FaqContainer>
  );
};

export default Faq;
