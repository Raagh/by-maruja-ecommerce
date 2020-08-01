import React from 'react';
import styled from 'styled-components';
import Button from '../shared/button';
import Accordion from '../shared/accordion/accordion';
import { AlignedCenterContainer, StyledH2 } from '../../config/global-styled-components';
import FaqJson from '../../config/faq-conf.json';
import { device } from '../../config/device';

const FaqContainer = styled(AlignedCenterContainer)`
  padding-top: 5rem;
  padding-bottom: 4rem;
  max-width: 1600px;
  margin: auto;

  @media ${device.large} {
    text-align: left;
    padding: 6rem 9rem 7rem 9rem;
  }
`;

const FaqButtonContainer = styled(AlignedCenterContainer)`
  margin-top: 6rem;
`;

const FaqTitle = styled(StyledH2)`
  margin-bottom: 2.5rem;
`;

const createAccordionContent = (question: string, answer: string, index: number) => {
  return <Accordion question={question} answer={answer} key={index} index={index} />;
};

const AccordionsContainer = styled.div`
  @media ${device.large} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const Faq = () => {
  return (
    <FaqContainer>
      <FaqTitle>Preguntas frecuentes</FaqTitle>
      <AccordionsContainer>
        {FaqJson.data.map((question, index) => createAccordionContent(question.question, question.answer, index))}
      </AccordionsContainer>
      <FaqButtonContainer>
        <Button text="LEER MÁS" url="/" />
      </FaqButtonContainer>
    </FaqContainer>
  );
};

export default Faq;
