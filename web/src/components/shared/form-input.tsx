import React, { useState} from 'react';
import styled from 'styled-components';

import { LabelSmall } from '../../config/global-styled-components';
import { colors, typography } from '../../config/global-styles';

const FormInputcontainer = styled.div`
    display: flex;
    flex-flow: column;
    margin-bottom: 1.5rem;
`;

const FormInputArea = styled.input`
    background: ${colors.ui.grey10percent};
    border: none;
    height: 3rem;
    font-family: ${typography.bodyCopy.regular.font.name};
    font-style: normal;
    font-weight: ${typography.bodyCopy.regular.fontWeight};
    font-size: 1rem;
    line-height: ${typography.bodyCopy.regular.small.lineHeight};
    letter-spacing: ${typography.bodyCopy.regular.small.letterSpacing};
    color: ${colors.ui.darkSurface};
    padding: 1rem;
    &:focus {
        box-shadow: 0px 2px 2px rgba(81, 50, 50, 0.15);
        outline: none;
        border: 1px solid ${colors.ui.grey50percent};
    };
`;

const FormInputBigArea = styled.textarea`
    background: ${colors.ui.grey10percent};
    border: none;
    height: 9rem;
    font-family: ${typography.bodyCopy.regular.font.name};
    font-style: normal;
    font-weight: ${typography.bodyCopy.regular.fontWeight};
    font-size: 1rem;
    line-height: ${typography.bodyCopy.regular.small.lineHeight};
    letter-spacing: ${typography.bodyCopy.regular.small.letterSpacing};
    color: ${colors.ui.darkSurface};
    padding: 1rem;
    resize: none;
    &:focus {
        box-shadow: 0px 2px 2px rgba(81, 50, 50, 0.15);
        outline: none;
        border: 1px solid ${colors.ui.grey50percent};
    };
`;

const FormInput = ({type, name, big = false} : {type: string, name:string, big?: boolean}) => {
    const [value, setValue] = useState('');

    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    return <FormInputcontainer>
        <LabelSmall>{name}</LabelSmall>
        {big ? <FormInputBigArea/> : <FormInputArea name={name} type={type} value={value} onChange={changeHandler}/>}
    </FormInputcontainer>
};

export default FormInput;