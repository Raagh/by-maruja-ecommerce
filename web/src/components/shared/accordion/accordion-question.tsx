import React from 'react';
import styled from 'styled-components';
import { BodyCopyBoldSmall } from '../../../config/global-styled-components';
import { device } from '../../../config/device';

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
