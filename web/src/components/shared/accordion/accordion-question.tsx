import React from 'react';
import styled from 'styled-components';
import { BodyCopyBoldSmall } from '../../../config/global-styled-components';

const AccordionQuestionContainer = styled.div`
  display: flex;

  margin-top: 1.5rem;
  max-width: 490px;
`;

const AccordionQuestionText = styled(BodyCopyBoldSmall)`
  text-align: left;
`;

const ChevronIcon = styled.img<{ open: boolean }>`
  ${(props) => (props.open ? '' : 'transform: scaleY(-1);')};
`;

const AccordionQuestion = ({
  question,
  open,
  handleClick,
}: {
  question: string;
  open: boolean;
  handleClick: Function;
}) => {
  return (
    <AccordionQuestionContainer onClick={() => handleClick(open)}>
      <AccordionQuestionText>{question}</AccordionQuestionText>
      <ChevronIcon src="/assets/Chevron.svg" open={open} />
    </AccordionQuestionContainer>
  );
};

export default AccordionQuestion;
