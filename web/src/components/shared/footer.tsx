import React from 'react';
import styled from 'styled-components';

import { LabelSmall, CaptionsSmall } from '../../config/global-styled-components';

const FooterContainer = styled.article`
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 57px;
  text-align: center;
`;

const FooterImageContainer = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const FooterImage = styled.img`
  margin-bottom: 0.5rem;
`;

const FooterLink = styled.a`
  display: block;
  margin-bottom: 1.5rem;
  text-decoration: none;
`;

const FooterDisclaimer = styled(CaptionsSmall)`
  margin-top: 2.5rem;
  margin-bottom: 2rem;

  letter-spacing: 1px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterImageContainer>
        <FooterImage src="/assets/MercadoPago-Logo.svg" alt="Mercado Pago Logo" />
        <FooterImage src="/assets/Formas-Pago.svg" alt="Formas de pago" />
      </FooterImageContainer>
      <FooterLink href="/">
        <LabelSmall>CONTACTO</LabelSmall>
      </FooterLink>
      <FooterLink href="/">
        <LabelSmall>PREGUNTAS FRECUENTES</LabelSmall>
      </FooterLink>
      <FooterLink href="/">
        <img src="/assets/Instagram.svg" alt="Instagram Logo" />
      </FooterLink>
      <FooterDisclaimer>
        © 2020 MARUJA. Todos los derechos reservados <br /> Design credits Development credits
      </FooterDisclaimer>
    </FooterContainer>
  );
};

export default Footer;
