import React, { useState } from 'react';
import styled from 'styled-components';

import Sidebar from './sidebar/sidebar';
import Accordion from './accordion/accordion';
import { BodyCopyBoldSmall, BodyCopyRegularSmall } from '../../config/global-styled-components';
import { colors } from '../../config/global-styles';
import { device } from '../../config/device';

const TopicSelectorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem 1.5rem 1rem 1.5rem;
  background: ${colors.ui.grey5percent};
  @media ${device.large} {
    width: 405px;
    display: flex;
  }
`;

const TopicSelectorIcon = styled.img`
  margin-right: 1rem;
`;

const TopicSelectorTitle = styled(BodyCopyBoldSmall)``;

const QuestionsContainer = styled.div`
  margin: 1.5rem 2rem 0 2rem;
`;

const Answer = styled(BodyCopyRegularSmall)`
  font-size: 16px;
`;
const TopicSelector = ({
  selection,
}: {
  selection: { Topic: string; data: { Question: string; Answer: string }[] };
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <TopicSelectorContainer onClick={() => setOpen(!isOpen)}>
      <TopicSelectorIcon src="/assets/Shippings.svg" alt="Shippings Icon" />
      <TopicSelectorTitle>{selection.Topic}</TopicSelectorTitle>
      <Sidebar isOpen={isOpen} clickHandler={() => setOpen(!isOpen)} sidebarTitle={selection.Topic}>
        <QuestionsContainer>
          {selection.data.map((topic, index) => {
            return (
              <Accordion key={index} title={topic.Question} index={index} isBold={true} initialHiddenStatus={index > 0}>
                <Answer>{topic.Answer}</Answer>
              </Accordion>
            );
          })}
        </QuestionsContainer>
      </Sidebar>
    </TopicSelectorContainer>
  );
};

export default TopicSelector;
