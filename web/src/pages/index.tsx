import axios from 'axios';
import Head from 'next/head';
import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import sanity from '../../lib/sanity';
import { mock as paymentDataRequest } from '../../__mocks__/mercado-pago-create-payment-request.mock';
import { globalStyles } from '../config/globalstyles';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100vh;
  }

  @font-face {
    font-family: ${globalStyles.primaryFontName};
    src: url('/fonts/Ortica-Light.woff') format("woff");
  }

  @font-face {
    font-family: ${globalStyles.secondaryFontName};
    src: url('/fonts/Mr-Eaves-XL-Modern.woff') format("woff");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

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
  font-family: ${globalStyles.primaryFontName};
  font-weight: ${globalStyles.primaryFontRegular};
  color: ${globalStyles.primaryColor};
`;

const Subtitle = styled.p`
  line-height: 1.5;
  font-size: 1.5rem;
  text-align: center;
  font-family: ${globalStyles.secondaryFontName};
  font-weight: ${globalStyles.secondaryFontRegular};
  color: ${globalStyles.secondaryColor};
`;

const SubtitleHighlight = styled.p`
  line-height: 1.5;
  font-size: 1.5rem;
  text-align: center;
  font-family: ${globalStyles.secondaryFontName};
  font-weight: ${globalStyles.secondaryFontBold};
  color: ${globalStyles.secondaryColor};
`;

const Index = (props: any) => {
  const [buttonText, setButtonText] = useState('');

  const contactCreatePayment = () => {
    axios.post('/api/create-payment', paymentDataRequest).then((result) => setButtonText(result.data));
  };

  return (
    <Container>
      <GlobalStyle></GlobalStyle>
      <Head>
        <title>By Maruja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>This is a title and uses the primary font in regular weight and with primary color (there is no primary font bold)</Title>
        <Subtitle>This is a description and uses the secondary font in regular weight and secondary color</Subtitle>

        <SubtitleHighlight>This is a subtitle highlight and uses the secondary font in bold weight and secondaryColor</SubtitleHighlight>
        <br />
        <p>
          Nombre: {props.name} - Stock: {props.stock} - Precio: {props.price}
        </p>
        <br />
        <button onClick={contactCreatePayment}>Call MercadoPago</button>
        <br />
        <p id="buttonText">{buttonText}</p>
      </Main>
    </Container>
  );
};

Index.getInitialProps = async () => {
  return await sanity.fetch(
    `
    *[_type == "product"][0]
  `
  );
};

export default Index;
