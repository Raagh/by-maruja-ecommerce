import React from 'react';
import styled from 'styled-components';

import { LabelSmall } from '../../config/global-styled-components';
import { colors } from '../../config/global-styles';

const FormInputcontainer = styled.div`
    display: flex;
    flex-flow: column;
    margin-bottom: 1.5rem;
`;

const FormInputArea = styled.input<{big:boolean}>`
    background: ${colors.ui.grey10percent};
    border: none;
    height: ${(props) => props.big ? '9rem' : '3rem'};
`;

const FormInput = ({type, name, value = '', big = false} : {type: string, name:string, value?: string, big?: boolean}) => {
    return <FormInputcontainer>
        <LabelSmall>{name}</LabelSmall>
        <FormInputArea name={name} type={type} value={value} big={big}/>
    </FormInputcontainer>
};

export default FormInput;