import React, { useState } from 'react';
import styled from 'styled-components';
import { BodyCopyRegularSmall } from '../../../config/global-styled-components';
import { colors } from '../../../config/global-styles';
import AccordionQuestion from './accordion-question';

const AccordionContainer = styled.article<{ index: number }>`
  border-bottom: 1px solid ${colors.ui.darkSurface};
  border-bottom: 1px solid rgba(81, 50, 50, 0.1);

  margin: 0 2rem 0 2rem;
  padding-bottom: 1.5rem;

  display: ${(props) => (props.index > 2 ? 'none' : '')};
`;

const AccordionContent = styled(BodyCopyRegularSmall)<{ hidden: boolean }>`
  display: ${(props) => (props.hidden ? 'none' : '')};

  margin: 0.75rem 0 0 0;
  text-align: left;
`;

const Accordion = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  let [hidden, useHidden] = useState(false);
  return (
    <AccordionContainer index={index}>
      <AccordionQuestion handleClick={useHidden} question={question} open={!hidden} />
      <AccordionContent hidden={hidden}>{answer}</AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
