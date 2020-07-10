import React, { useState } from 'react';
import styled from 'styled-components';
import { BodyCopyRegularSmall } from '../../../config/global-styled-components';
import AccordionQuestion from './accordion-question';

const AccordionContent = styled(BodyCopyRegularSmall)<{ hidden: boolean }>`
  display: ${(props) => (props.hidden ? 'hidden' : 'block')};
`;

const Accordion = ({ question, answer }: { question: string; answer: string }) => {
  let [hidden, useHidden] = useState(false);

  return (
    <article>
      <AccordionQuestion handleClick={useHidden} question={question} open={!hidden} />
      <AccordionContent hidden={hidden}>{answer}</AccordionContent>
    </article>
  );
};

export default Accordion;
