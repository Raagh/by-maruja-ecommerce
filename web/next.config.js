const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        useMercadoPagoSandbox: true,
        publicKey: 'TEST-aa3261db-2705-4be0-a833-acd10fbae7d6',
        accessToken: 'TEST-7136722070390133-050117-a2efac96031b2994b4f6a2da97e77383-478787616',
        sanityAccessToken:
          'skkIcQHzgdfmqr5Nev6UcSPX7etCd8FmvTxl8Mp4I4DUOmtKKc4WtAwO2VOWsWOMasDxuhRE6jd1M82AlwgMJObuBwFLwzDcmwpZ5A7CxIsHKlm9XaOSzUh2ar0fFtX1O4AV1gAlK7VsU2O3PYZg2QXySKOiLlr81hLRSHE6CF2sZKCy6LOP',
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
