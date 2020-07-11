import React from 'react';
import styled from 'styled-components';
import { BodyCopyBoldSmall } from '../../../config/global-styled-components';

const AccordionQuestionContainer = styled.div``;

const ChevronIcon = styled.img<{ open: boolean }>`
  ${(props) => (props.open ? '' : 'transform: scaleY(-1);')};
`;

const AccordionQuestion = ({ question, open, handleClick }: { question: string; open: boolean; handleClick: Function }) => {
  return (
    <AccordionQuestionContainer onClick={() => handleClick(open)}>
      <BodyCopyBoldSmall>{question}</BodyCopyBoldSmall>
      <ChevronIcon open={open} />
    </AccordionQuestionContainer>
  );
};

export default AccordionQuestion;
