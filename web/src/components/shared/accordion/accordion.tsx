import React, { useState } from 'react';
import styled from 'styled-components';
import { BodyCopyRegularSmall } from '../../../config/global-styled-components';
import AccordionQuestion from './accordion-question';
import { device } from '../../../config/device';

const AccordionContainer = styled.article<{ index: number }>`
  border-bottom: 1px solid rgba(81, 50, 50, 0.1);

  margin: 0 2rem 0 2rem;
  padding-bottom: 1.5rem;

  display: ${(props) => (props.index > 2 ? 'none' : 'inline-block')};

  @media ${device.large} {
    margin: 2rem 0 0 0;
    width: 48%;
    display: ${(props) => (props.index > 3 ? 'none' : 'inline-block')};
  }
`;

const AccordionContent = styled(BodyCopyRegularSmall)<{ hidden: boolean }>`
  display: ${(props) => (props.hidden ? 'none' : '')};

  margin: 0.75rem 0 0 0;
  text-align: left;

  @media ${device.large} {
    margin: 1rem 1rem 0 0;
    display: block;
  }
`;

const Accordion = ({
  question,
  answer,
  index,
  initialHiddenStatus = false,
}: {
  question: string;
  answer: string;
  index: number;
  initialHiddenStatus?: boolean;
}) => {
  const [hidden, useHidden] = useState(initialHiddenStatus);
  return (
    <AccordionContainer index={index}>
      <AccordionQuestion handleClick={useHidden} question={question} open={!hidden} />
      <AccordionContent hidden={hidden}>{answer}</AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
