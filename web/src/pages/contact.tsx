import React from 'react';
import styled from 'styled-components';
import { sanity } from '../../lib/sanity';

import Layout from '../components/shared/layout';
import FormInput from '../components/shared/form-input';
import PrimaryButton from '../components/shared/primary-button';
import Faq from '../components/shared/faq';
import { CategoryConfiguration } from '../model/category-configuration';
import { StyledH3Title, BodyCopyBoldSmall, BodyCopyRegularSmall, StyledH6Title } from '../config/global-styled-components';
import { colors } from '../config/global-styles';


const ContactPageContainer = styled.section`
    padding: 0 1.5rem 0 1.5rem;
`;

const ContactPageTitle = styled(StyledH3Title)`
  text-align: center;
  background: ${colors.ui.grey5percent};
  padding: 4rem 1.5rem 4rem 1.5rem;
  margin-bottom: 2rem;
`;

const ContactForm = styled.form``;

const ContactHeader = styled(BodyCopyRegularSmall)`
    font-size: 16px;
    text-align: center;
    margin-bottom: 2.5rem;
`;

const SocialNetworksContainer = styled.section`
    margin-top: 3.5rem;
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
  return (
    <Layout categories={categories}>
      <ContactPageTitle>Contacto</ContactPageTitle>
      <ContactPageContainer>
          <ContactForm>
                <ContactHeader>Llená el formulario para contactarnos. Te vamos a responder dentro de las próximas 24 horas hábiles.</ContactHeader>
                <FormInput name={'Nombre'} type={'text'} />
                <FormInput name={'E-mail'} type={'email'} />
                <FormInput name={'Mensaje'} type={'text'} big={true}/>
                <PrimaryButton text='ENVIAR MENSAJE' onClick={() => console.log('Here')}/>
          </ContactForm>
          <SocialNetworksContainer>
            <SocialNetwork>
                <SocialNetworkTitle>CONTACTANOS POR INSTAGRAM</SocialNetworkTitle>
                <SocialNetworkHeader><Icon src='/assets/Instagram.svg'/>@ByMaruja</SocialNetworkHeader>
            </SocialNetwork>
            <SocialNetwork>
                <SocialNetworkTitle>CONTACTANOS POR EMAIL</SocialNetworkTitle>
                <SocialNetworkHeader><Icon src='/assets/Instagram.svg'/>hola@maruja.com</SocialNetworkHeader>
            </SocialNetwork>
          </SocialNetworksContainer>
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
