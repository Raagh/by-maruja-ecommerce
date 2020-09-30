import React, { useState } from 'react';
import styled from 'styled-components';
import { BodyCopyRegularSmall } from '../../../config/global-styled-components';
import AccordionQuestion from './accordion-question';
import { device } from '../../../config/device';

const PassInContainer = styled.section``;

const AccordionContainer = styled.article<{ index: number }>`
  border-bottom: 1px solid rgba(81, 50, 50, 0.1);

  padding-bottom: 1.5rem;
  width: 100%;

  display: ${(props) => (props.index > 2 ? 'none' : 'inline-block')};

  @media ${device.large} {
    margin: 2rem 0 0 0;
    display: ${(props) => (props.index > 3 ? 'none' : 'inline-block')};
  }
`;

const AccordionContent = styled(BodyCopyRegularSmall)<{ hidden: boolean }>`
  display: ${(props) => (props.hidden ? 'none' : 'block')};
  width: 90%;

  margin: 0.75rem 0 0 0;
  text-align: left;

  @media ${device.large} {
    margin: 1rem 1rem 0 0;
  }
`;

const Accordion = ({
  className,
  title,
  index,
  initialHiddenStatus = false,
  children,
  isBold = false,
}: {
  className?: string;
  title: string;
  index: number;
  initialHiddenStatus?: boolean;
  isBold?: boolean;
  children?: any;
}) => {
  const [hidden, useHidden] = useState(initialHiddenStatus);
  return (
    <PassInContainer className={className}>
      <AccordionContainer index={index}>
        <AccordionQuestion handleClick={useHidden} question={title} open={!hidden} isBold={isBold} />
        <AccordionContent hidden={hidden}>{children}</AccordionContent>
      </AccordionContainer>
    </PassInContainer>
  );
};

export default Accordion;
