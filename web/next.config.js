const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        useMercadoPagoSandbox: true,
        mercadoPagoPublicKey: process.env.MERCADO_PAGO_PUBLIC_KEY,
        mercadoPagoAccessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN,
        sanityAccessToken: process.env.SANITY_ACCESS_TOKEN,
      },
    };
  }

  return {
    env: {
      useMercadoPagoSandbox: false,
      // TODO ADD PRODUCTION TOKEN AND KEY
    },
  };
};
