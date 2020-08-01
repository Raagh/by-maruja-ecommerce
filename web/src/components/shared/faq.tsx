import React from 'react';
import styled from 'styled-components';
import Button from './button';
import Accordion from './accordion/accordion';
import { AlignedCenterContainer, StyledH2 } from '../../config/global-styled-components';
import FaqJson from '../../config/faq-conf.json';
import { device } from '../../config/device';

const FaqContainer = styled(AlignedCenterContainer)`
  padding-bottom: 4rem;
  max-width: 1600px;
  margin: auto;
  padding: 0 2rem 4rem 2rem;

  @media ${device.large} {
    text-align: left;
    padding: 6rem 9rem 7rem 9rem;
  }
`;

const FaqButtonContainer = styled(AlignedCenterContainer)`
  margin-top: 6rem;
`;

const FaqTitle = styled(StyledH2)`
  margin-top: 5rem;
  margin-bottom: 2.5rem;

  @media ${device.large} {
    margin-bottom: 4rem;
    margin-top: 0;
  }
`;

const StyledAccordion = styled(Accordion)`
  width: 100%;

  @media ${device.large} {
    width: 48%;
  }
`;

const createAccordionContent = (question: string, answer: string, index: number, isHidden: boolean) => {
  return (
    <StyledAccordion question={question} answer={answer} key={index} index={index} initialHiddenStatus={isHidden} />
  );
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
        {FaqJson.data.map((question, index) =>
          createAccordionContent(question.question, question.answer, index, question.isHidden)
        )}
      </AccordionsContainer>
      <FaqButtonContainer>
        <Button text="LEER MÁS" url="/" />
      </FaqButtonContainer>
    </FaqContainer>
  );
};

export default Faq;
