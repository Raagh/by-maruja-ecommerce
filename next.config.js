const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        useMercadoPagoSandbox: true,
        publicKey: 'TEST-aa3261db-2705-4be0-a833-acd10fbae7d6',
        accessToken: 'TEST-7136722070390133-050117-a2efac96031b2994b4f6a2da97e77383-478787616',
      },
    };
  }

  return {
    env: {
      useMercadoPagoSandbox: false,
      // TODO ADD PRODUCTION TOKEN AND KEY

      // publicKey: 'TEST-aa3261db-2705-4be0-a833-acd10fbae7d6',
      // accessToken: 'TEST-7136722070390133-050117-a2efac96031b2994b4f6a2da97e77383-478787616',
    },
  };
};
