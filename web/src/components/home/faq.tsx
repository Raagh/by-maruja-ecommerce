import React from 'react';
import styled from 'styled-components';
import Button from '../shared/button';
import Accordion from '../shared/accordion/accordion';
import { AlignedCenterContainer } from '../../config/global-styled-components';
import { StyledH2 } from '../../config/global-styled-components';
import FaqJson from '../../config/faq-conf.json';
import { device } from '../../config/device';

const FaqContainer = styled(AlignedCenterContainer)`
  padding-top: 5rem;
  max-width: 1600px;
  margin: auto;
  @media ${device.large} {
    text-align: left;

    padding: 15rem 8rem 0 8rem;
  }
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
      <AlignedCenterContainer>
        <Button text={'LEER MÁS'} url={'/'} />
      </AlignedCenterContainer>
    </FaqContainer>
  );
};

export default Faq;
