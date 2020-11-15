import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useRouter } from 'next/router';

import { sanity } from '../../lib/sanity';

import Layout from '../components/shared/layout';
import FormInput from '../components/shared/form-input';
import PrimaryButton from '../components/shared/primary-button';
import Faq from '../components/shared/faq';
import ErrorAlert from '../components/shared/error-alert';
import { CategoryConfiguration } from '../model/category-configuration';
import {
  StyledH3Title,
  BodyCopyBoldSmall,
  BodyCopyRegularSmall,
  StyledH6Title,
} from '../config/global-styled-components';
import { colors } from '../config/global-styles';
import { device } from '../config/device';
import ErrorData from '../config/error-alert-conf.json';

const ContactPageContainer = styled.section`
  padding: 0 1.5rem 0 1.5rem;

  @media ${device.large} {
    padding-top: 2.5rem;
  }
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

const ContactHeader = styled(BodyCopyRegularSmall)<{ onlyMobile: boolean }>`
  font-size: 16px;
  text-align: center;
  margin-bottom: 2.5rem;
  display: ${(props) => (props.onlyMobile ? 'inline-block' : 'none')};
  @media ${device.large} {
    display: ${(props) => (props.onlyMobile ? 'none' : 'inline-block')};
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

  :hover {
    color: ${colors.primary.dark};
  }
`;
const Icon = styled.img`
  display: inline-block;
  margin-right: 0.5rem;
  vertical-align: text-top;
`;

const StyledLink = styled.a`
  text-decoration: none;
  overflow: hidden;
  user-select: none;
`;

const ContactPage = ({ categories }: { categories: Array<CategoryConfiguration> }) => {
  const [name, setName] = useState({ value: '', error: false });
  const [email, setEmail] = useState({ value: '', error: false });
  const [content, setContent] = useState({ value: '', error: false });

  const [showError, setShowError] = useState(false);
  const router = useRouter();

  const isFieldValid = (field: { value: string; error: boolean }) => {
    return /^\S/.test(field.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFieldValid(name)) {
      setName({ value: name.value, error: true });
    } else if (!isFieldValid(email)) {
      setEmail({ value: email.value, error: true });
    } else if (!isFieldValid(content)) {
      setContent({ value: content.value, error: true });
    } else {
      axios
        .post('/api/send-email', { name: name.value, email: email.value, content: content.value })
        .then(() => router.push('/contact-success'))
        .catch(() => {
          setShowError(true);
          window.scrollTo(0, 300);
        });
    }
  };

  return (
    <Layout categories={categories}>
      <ContactPageTitle>Contacto</ContactPageTitle>
      <ContactPageContainer>
        <LargeOnlyContainer>
          <ContactForm autoComplete="off" onSubmit={(e) => submitHandler(e)}>
            <ContactHeader onlyMobile={true}>
              Llená el formulario para contactarnos. <br />
              Te vamos a responder dentro de las próximas 24 horas hábiles.
            </ContactHeader>
            <ErrorAlert isVisible={showError} title={ErrorData.email.title} subtitle={ErrorData.email.subtitle} />
            <FormInput name="Nombre *" type="text" value={name.value} onChange={setName} error={name.error} />
            <FormInput name="E-mail *" type="email" value={email.value} onChange={setEmail} error={email.error} />
            <FormInput
              name="Mensaje *"
              type="textarea"
              value={content.value}
              onChange={setContent}
              error={content.error}
            />
            <PrimaryButton
              text="ENVIAR MENSAJE"
              disabled={name.value === '' || email.value === '' || !email.value.includes('@') || content.value === ''}
              onClick={() => 0}
            />
          </ContactForm>
          <SocialNetworksContainer>
            <ContactHeader onlyMobile={false}>
              Llená el formulario para contactarnos. <br />
              Te vamos a responder dentro de las próximas 24 horas hábiles.
            </ContactHeader>
            <SocialNetwork>
              <SocialNetworkTitle>CONTACTANOS POR INSTAGRAM</SocialNetworkTitle>

              <StyledLink href="https://www.instagram.com/bymaruja/" target="_blank" rel="noopener noreferrer">
                <SocialNetworkHeader>
                  <Icon src="/assets/Instagram.svg" />
                  @ByMaruja
                </SocialNetworkHeader>
              </StyledLink>
            </SocialNetwork>
            <SocialNetwork>
              <SocialNetworkTitle>CONTACTANOS POR EMAIL</SocialNetworkTitle>
              <SocialNetworkHeader>marujabyrocio@gmail.com</SocialNetworkHeader>
            </SocialNetwork>
          </SocialNetworksContainer>
        </LargeOnlyContainer>
        <Faq />
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
