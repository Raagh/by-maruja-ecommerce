import React from 'react';

import { LabelSmall, CaptionsSmall } from '../../config/global-styled-components';

const Footer = () => {
  return (
    <div>
      <img src="/assets/MercadoPago-Logo.svg" alt="Mercado Pago Logo" />
      <img src="/assets/Formas-Pago.svg" alt="Formas de pago" />
      <a href="/">
        <LabelSmall>Contacto</LabelSmall>
      </a>
      <a href="/">
        <LabelSmall>Preguntas Frecuentes</LabelSmall>
      </a>
      <a href="/">
        <img src="/assets/Instagram.svg" alt="Instagram Logo" />
      </a>
      <CaptionsSmall>© 2020 MARUJA. Todos los derechos reservadosDesign credits Development credits</CaptionsSmall>
    </div>
  );
};

export default Footer;
