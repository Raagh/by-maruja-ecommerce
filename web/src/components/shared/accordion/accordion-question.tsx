import React from 'react';
import styled from 'styled-components';
import { BodyCopyBoldSmall } from '../../../config/global-styled-components';
import { device } from '../../../config/device';
import Chevron from '../chevron';

const AccordionQuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  @media ${device.large} {
    margin-top: 0;
  }
`;

const AccordionQuestionText = styled(BodyCopyBoldSmall)`
  text-align: left;
  width: 80%;
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
      <Chevron isOpen={open} />
    </AccordionQuestionContainer>
  );
};

export default AccordionQuestion;
