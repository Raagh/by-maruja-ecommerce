import React from 'react';
import styled from 'styled-components';

import { BodyCopyBoldSmall, BodyCopyRegularSmall } from '../../config/global-styled-components';
import { colors } from '../../config/global-styles';

const ErrorAlertContainer = styled.section<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  background: ${colors.ui.grey10percent};
  padding: 2rem 1.5rem 2rem 1.5rem;
  margin: 1rem 0 1rem 0;
  border-radius: 12px;
`;

const TextContainer = styled.div``;
const ErrorIcon = styled.img`
  margin-right: 1.25rem;
  align-self: flex-start;
`;

const ErrorAlert = ({ isVisible, title, subtitle }: { isVisible: boolean; title: string; subtitle: string }) => {
  return (
    <ErrorAlertContainer isVisible={isVisible}>
      <ErrorIcon src="/assets/error-icon.svg" />
      <TextContainer>
        <BodyCopyBoldSmall>{title}</BodyCopyBoldSmall>
        <BodyCopyRegularSmall>{subtitle}</BodyCopyRegularSmall>
      </TextContainer>
    </ErrorAlertContainer>
  );
};

export default ErrorAlert;
