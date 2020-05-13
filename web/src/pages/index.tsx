import axios from 'axios';
import Head from 'next/head';
import React, { useState } from 'react';
import styled from 'styled-components';
import sanity from '../../lib/sanity';
import { mock as paymentDataRequest } from '../../__mocks__/mercado-pago-create-payment-request.mock';

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
`;

const Description = styled.p`
  line-height: 1.5;
  font-size: 1.5rem;
  text-align: center;
`;

const Index = (props: any) => {
  const [buttonText, setButtonText] = useState('');

  const contactCreatePayment = () => {
    axios.post('/api/create-payment', paymentDataRequest).then((result) => setButtonText(result.data));
  };

  return (
    <Container>
      <Head>
        <title>By Maruja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>
          Welcome to <a href="https://nextjs.org">Next.js! for by maruja ecommerce</a>
        </Title>
        <Description>
          Get started by editing <code>pages/index.tsx</code>
        </Description>
        <button onClick={contactCreatePayment}>Call MercadoPago</button>
        <p id="buttonText">{buttonText}</p>
        <Description>
          Nombre: {props.name} - Stock: {props.stock} - Precio: {props.price}
        </Description>
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
