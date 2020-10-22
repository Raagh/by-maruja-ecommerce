import React from 'react';
import styled from 'styled-components';

import { LabelSmall } from '../../config/global-styled-components';
import { colors, typography } from '../../config/global-styles';

const FormInputcontainer = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 1.8rem;
`;

const FormInputArea = styled.div`
  display: flex;
  background: ${colors.ui.grey10percent};
  height: 3rem;
  padding: 0.9rem;
  margin-top: 0.5rem;
  border-radius: 4px;
  &:focus-within {
    box-shadow: 0px 2px 2px rgba(81, 50, 50, 0.15);
    outline: none;
    border: 1px solid ${colors.ui.grey50percent};
  }
`;

const FormInputBigArea = styled(FormInputArea)`
  height: 9rem;
  resize: both;
`;

const FormField = styled.input`
  background: ${colors.ui.grey10percent};
  width: 100%;
  height: 100%;
  border: none;
  font-family: ${typography.bodyCopy.regular.font.name};
  font-style: normal;
  font-weight: ${typography.bodyCopy.regular.fontWeight};
  font-size: 1rem;
  line-height: ${typography.bodyCopy.regular.small.lineHeight};
  letter-spacing: ${typography.bodyCopy.regular.small.letterSpacing};
  color: ${colors.ui.darkSurface};

  &:focus {
    outline: none;
  }
`;

const FormTextArea = styled.textarea`
  background: ${colors.ui.grey10percent};
  width: 100%;
  height: 100%;
  border: none;
  font-family: ${typography.bodyCopy.regular.font.name};
  font-style: normal;
  font-weight: ${typography.bodyCopy.regular.fontWeight};
  font-size: 1rem;
  line-height: ${typography.bodyCopy.regular.small.lineHeight};
  letter-spacing: ${typography.bodyCopy.regular.small.letterSpacing};
  color: ${colors.ui.darkSurface};
  resize: none;
  &:focus {
    outline: none;
  }
`;

const ErrorIcon = styled.img``;

const FormInput = ({
  type,
  name,
  value,
  onChange,
  error = false,
}: {
  type: string;
  name: string;
  value: string;
  onChange: any;
  error?: boolean;
}) => {
  const inputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    onChange({ value: e.currentTarget.value, error: false });
  };

  const textAreaChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange({ value: e.currentTarget.value, error: false });
  };

  return (
    <FormInputcontainer>
      <LabelSmall>{name}</LabelSmall>
      {type === 'textarea' ? (
        <FormInputBigArea>
          <FormTextArea value={value} onChange={textAreaChangeHandler} />
          {error ? <ErrorIcon src="/assets/error-icon-fill.svg" /> : ''}
        </FormInputBigArea>
      ) : (
        <FormInputArea>
          <FormField name={name} type={type} value={value} onChange={inputChangeHandler} />
          {error ? <ErrorIcon src="/assets/error-icon-fill.svg" /> : ''}
        </FormInputArea>
      )}
    </FormInputcontainer>
  );
};

export default FormInput;
