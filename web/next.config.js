const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  const defaultEnv = {
    mercadoPagoPublicKey: process.env.MERCADO_PAGO_PUBLIC_KEY,
    mercadoPagoAccessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN,
    sanityAccessToken: process.env.SANITY_ACCESS_TOKEN,
    sanityDataset: process.env.SANITY_DATASET,
    sanityProjectId: process.env.SANITY_PROJECT_ID,
    instagramUser: process.env.INSTAGRAM_USER,
    instagramPassword: process.env.INSTAGRAM_PASSWORD,
    url: process.env.URL,
    gmailUser: process.env.GMAIL_USER,
    gmailPass: process.env.GMAIL_PASS,
  };

  return phase === PHASE_DEVELOPMENT_SERVER
    ? { env: { ...defaultEnv, useMercadoPagoSandbox: true } }
    : { env: { ...defaultEnv, useMercadoPagoSandbox: false } };
};
