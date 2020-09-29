import React from 'react';
import styled from 'styled-components';
import { BodyCopyBoldSmall, BodyCopyRegularSmall } from '../../../config/global-styled-components';
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

const AccordionQuestionBoldText = styled(BodyCopyBoldSmall)`
  text-align: left;
  width: 80%;
`;

const AccordionQuestionRegularText = styled(BodyCopyRegularSmall)`
  text-align: left;
  width: 80%;
`;

const AccordionQuestion = ({
  question,
  open,
  isBold,
  handleClick,
}: {
  question: string;
  isBold: boolean;
  open: boolean;
  handleClick: Function;
}) => {
  return (
    <AccordionQuestionContainer onClick={() => handleClick(open)}>
      {isBold && <AccordionQuestionBoldText>{question}</AccordionQuestionBoldText>}
      {!isBold && <AccordionQuestionRegularText>{question}</AccordionQuestionRegularText>}
      <Chevron isOpen={open} />
    </AccordionQuestionContainer>
  );
};

export default AccordionQuestion;
