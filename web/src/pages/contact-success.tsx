import React from 'react';
import styled from 'styled-components';
import { sanity } from '../../lib/sanity';
import Button from '../components/shared/secondary-button';

import Layout from '../components/shared/layout';
import { CategoryConfiguration } from '../model/category-configuration';
import { StyledH3Title, BodyCopyRegularSmall } from '../config/global-styled-components';
import { device } from '../config/device';
import { colors } from '../config/global-styles';

const ContactSuccessContainer = styled.section`
  padding: 0 1.5rem 0 1.5rem;
  text-align: center;
  background-color: ${colors.ui.grey5percent};
`;

const ContactSuccessTitle = styled(StyledH3Title)`
  text-align: center;
  padding: 4rem 2rem 2rem 2rem;
  @media ${device.large} {
    padding: 4rem 0 2rem 2rem;
  }
`;

const ContactSuccessText = styled(BodyCopyRegularSmall)`
  font-size: 1rem;
`;

const LinkContainer = styled.div`
  padding: 3rem 0 7rem 0;
  @media ${device.large} {
    padding-bottom: 8rem;
  }
`;

const ContactSuccessPage = ({ categories }: { categories: Array<CategoryConfiguration> }) => {
  return (
    <Layout categories={categories}>
      <ContactSuccessContainer>
        <ContactSuccessTitle>!Listo! Tu mensaje ha sido enviado.</ContactSuccessTitle>
        <ContactSuccessText>Te vamos a responder dentro de las próximas 24 horas hábiles.</ContactSuccessText>
        <LinkContainer>
          <Button text="SEGUIR MIRANDO" url="/" />
        </LinkContainer>
      </ContactSuccessContainer>
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

export default ContactSuccessPage;
