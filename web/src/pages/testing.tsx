import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { sanity } from '../../lib/sanity';
import { mock as paymentDataRequest } from '../../__mocks__/mercado-pago-create-payment-request.mock';
import Layout from '../components/shared/layout';
import { colors, typography } from '../config/global-styles';
import { Product } from '../model/product';

const Container = styled.section`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  font-family: ${typography.titles.h1.font.name};
  font-weight: ${typography.titles.h1.font.regularWeight};
  color: ${colors.primary.dark};
`;

const Subtitle = styled.p`
  line-height: 1.5;
  font-size: 1.5rem;
  text-align: center;
  font-family: ${typography.subtitle.font.name};
  font-weight: ${typography.subtitle.font.fontWeight};
  color: ${colors.secondary.default};
`;

const SubtitleHighlight = styled.p`
  line-height: 1.5;
  font-size: 1.5rem;
  text-align: center;
  font-family: ${typography.subtitle.font.name};
  font-weight: ${typography.subtitle.font.fontWeight};
  color: ${colors.ui.darkSurface};
`;

const Index = (product: Product) => {
  const [buttonText, setButtonText] = useState('');

  const contactCreatePayment = () => {
    axios.post('/api/create-payment', paymentDataRequest).then((result) => setButtonText(result.data));
  };

  const contactInstagramFeed = () => {
    axios.get('/api/instagram-feed').then(console.log);
  };

  return (
    <Layout>
      <Container>
        <Main>
          <Title>This is a title and uses the primary font in regular weight and with primary color (there is no primary font bold)</Title>
          <Subtitle>This is a description and uses the secondary font in regular weight and secondary color</Subtitle>

          <SubtitleHighlight>This is a subtitle highlight and uses the secondary font in bold weight and secondaryColor</SubtitleHighlight>
          <br />
          <p>
            Nombre: {product.name} - Stock: {product.stock} - Precio: {product.price}
          </p>
          <br />
          <button type="button" onClick={contactCreatePayment}>
            Call MercadoPago
          </button>
          <button type="button" onClick={contactInstagramFeed}>
            Call Instagram Feed
          </button>
          <br />
          <p id="buttonText">{buttonText}</p>
        </Main>
      </Container>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  return sanity.fetch(
    `
    *[_type == "product"][0]
  `
  );
};

export default Index;
