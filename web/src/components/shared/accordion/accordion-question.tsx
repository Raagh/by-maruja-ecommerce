import React from 'react';
import styled from 'styled-components';
import { BodyCopyBoldSmall } from '../../../config/global-styled-components';

const AccordionQuestionContainer = styled.div``;

const AccordionQuestion = ({ question, open, handleClick }: { question: string; open: boolean; handleClick: Function }) => {
  return (
    <AccordionQuestionContainer onClick={() => handleClick(open)}>
      <BodyCopyBoldSmall>{question}</BodyCopyBoldSmall>
    </AccordionQuestionContainer>
  );
};

export default AccordionQuestion;
