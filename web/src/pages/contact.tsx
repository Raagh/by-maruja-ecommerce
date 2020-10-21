import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { sanity } from '../../lib/sanity';
import { useRouter } from 'next/router';

import Layout from '../components/shared/layout';
import FormInput from '../components/shared/form-input';
import PrimaryButton from '../components/shared/primary-button';
import Faq from '../components/shared/faq';
import ErrorAlert from '../components/shared/error-alert';
import { CategoryConfiguration } from '../model/category-configuration';
import { StyledH3Title, BodyCopyBoldSmall, BodyCopyRegularSmall, StyledH6Title } from '../config/global-styled-components';
import { colors } from '../config/global-styles';
import { device } from '../config/device';
import ErrorData from '../config/error-alert-conf.json';

const ContactPageContainer = styled.section`
    padding: 0 1.5rem 0 1.5rem;
`;

const LargeOnlyContainer = styled.div`
    @media ${device.large} {
        display: flex;
        flex-flow: row-reverse;
        justify-content: center;
        margin-bottom: 5rem;
    }
`;

const ContactPageTitle = styled(StyledH3Title)`
  text-align: center;
  background: ${colors.ui.grey5percent};
  padding: 4rem 1.5rem 4rem 1.5rem;
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
    @media ${device.large} {
        max-width: 400px;
        width: 100%;
    }
`;

const ContactHeader = styled(BodyCopyRegularSmall)<{ onlyMobile: boolean}>`
    font-size: 16px;
    text-align: center;
    margin-bottom: 2.5rem;
    display: ${(props) => props.onlyMobile ? 'inline-block' : 'none'};
    @media ${device.large} {
        display: ${(props) => props.onlyMobile ? 'none' : 'inline-block'};
    }
`;

const SocialNetworksContainer = styled.section`
    margin-top: 3.5rem;
    @media ${device.large} {
        max-width: 350px;
        margin-right: 5rem;
    }
`;

const SocialNetwork = styled.div`
    display: flex;
    flex-flow: column;
    text-align: center;
`;

const SocialNetworkTitle = styled(StyledH6Title)`
    color: ${colors.primary.dark};
    margin-bottom: 1rem;
`;

const SocialNetworkHeader = styled(BodyCopyBoldSmall)`
    font-size: 16px;
    text-align: center;
    margin-bottom: 2.5rem;
`;
const Icon = styled.img`
    display:inline-block;
    margin-right: 0.5rem;
    vertical-align: text-top;
`;

const ContactPage = ({ categories }: { categories: Array<CategoryConfiguration> }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');
    const [showError, setShowError] = useState(false);
    const router = useRouter();

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let result = await axios.post('/api/send-email', {name, email, content})
        if(result.status === 200){
           router.push('/contact-success');
        }else{
            setShowError(true);
        };
    };

  return (
    <Layout categories={categories}>
      <ContactPageTitle>Contacto</ContactPageTitle>
      <ContactPageContainer>
          <LargeOnlyContainer>
          <ContactForm autoComplete="off" onSubmit={(e) => submitHandler(e)}>
                <ErrorAlert isVisible={showError} title={ErrorData.email.title} subtitle={ErrorData.email.subtitle} />
                <ContactHeader onlyMobile={true}>Llená el formulario para contactarnos. Te vamos a responder dentro de las próximas 24 horas hábiles.</ContactHeader>
                <FormInput name={'Nombre'} type={'text'} value={name} onChange={setName} />
                <FormInput name={'E-mail'} type={'email'} value={email} onChange={setEmail} />
                <FormInput name={'Mensaje'} type={'text'} big={true} value={content} onChange={setContent}/>
                <PrimaryButton text='ENVIAR MENSAJE' onClick={() => 0}/>
          </ContactForm>
          <SocialNetworksContainer>
            <ContactHeader onlyMobile={false}>Llená el formulario para contactarnos. Te vamos a responder dentro de las próximas 24 horas hábiles.</ContactHeader>
            <SocialNetwork>
                <SocialNetworkTitle>CONTACTANOS POR INSTAGRAM</SocialNetworkTitle>
                <SocialNetworkHeader><Icon src='/assets/Instagram.svg'/>@ByMaruja</SocialNetworkHeader>
            </SocialNetwork>
            <SocialNetwork>
                <SocialNetworkTitle>CONTACTANOS POR EMAIL</SocialNetworkTitle>
                <SocialNetworkHeader><Icon src='/assets/Instagram.svg'/>hola@maruja.com</SocialNetworkHeader>
            </SocialNetwork>
          </SocialNetworksContainer>
          </LargeOnlyContainer>
        <Faq/>
      </ContactPageContainer>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const sanityResult = await sanity.fetch(
    `
      *[_type == "homeSettings"][0]{
        "categories": categories[]->{
          searchName,
          name,
          image,
          "asset": image.asset-> {
            url,
            metadata 
         }
        },
       }
    `
  );
  return { props: { ...sanityResult } };
};

export default ContactPage;
