import React, { useState } from 'react';
import styled from 'styled-components';

import Sidebar from './sidebar/sidebar';
import Accordion from './accordion/accordion';
import { BodyCopyBoldSmall, BodyCopyRegularSmall } from '../../config/global-styled-components';
import { colors } from '../../config/global-styles';
import { device } from '../../config/device';

const TopicSelectorOuterContainer = styled.div`
  margin-bottom: 1rem;
  background: ${colors.ui.grey5percent};
  border-radius: 8px;
  @media ${device.large} {
    display: flex;
  }
`;

const TopicSelectorInnerContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem 1rem 1.5rem;
  @media ${device.large} {
    width: 405px;
  }
`;

const TopicSelectorIcon = styled.img`
  margin-right: 1rem;
`;

const TopicSelectorTitle = styled(BodyCopyBoldSmall)``;

const QuestionsContainer = styled.div`
  padding: 1.5rem 2.5rem 0 2.5rem;
  width: 100%;
`;

const Answer = styled(BodyCopyRegularSmall)`
  font-size: 16px;
`;
const TopicSelector = ({
  selection,
}: {
  selection: { topic: string; icon: string; data: { question: string; answer: string }[] };
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <TopicSelectorOuterContainer>
      <TopicSelectorInnerContainer onClick={() => setOpen(true)}>
        <TopicSelectorIcon src={selection.icon} alt="Shippings Icon" />
        <TopicSelectorTitle>{selection.topic}</TopicSelectorTitle>
      </TopicSelectorInnerContainer>
      <Sidebar isOpen={isOpen} clickHandler={() => setOpen(false)} sidebarTitle={selection.topic}>
        <QuestionsContainer>
          {selection.data.map((topic, index) => {
            return (
              <Accordion key={index} title={topic.question} index={index} isBold={true} initialHiddenStatus={index > 0}>
                <Answer>{topic.answer}</Answer>
              </Accordion>
            );
          })}
        </QuestionsContainer>
      </Sidebar>
    </TopicSelectorOuterContainer>
  );
};

export default TopicSelector;
