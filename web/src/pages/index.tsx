import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import sanity from '../../lib/sanity';
import { mock as paymentDataRequest } from '../../__mocks__/mercado-pago-create-payment-request.mock';
import { globalStyles } from '../config/globalstyles';
import Layout from '../components/shared/layout';

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
    <Layout>
      <Container>
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
    </Layout>
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
