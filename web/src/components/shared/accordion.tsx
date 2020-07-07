import React from 'react';
import { BodyCopyBoldSmall, BodyCopyRegularSmall } from '../../config/global-styled-components';

const Accordion = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <div>
      <BodyCopyBoldSmall>{question}</BodyCopyBoldSmall>
      <BodyCopyRegularSmall>{answer}</BodyCopyRegularSmall>
    </div>
  );
};

export default Accordion;
