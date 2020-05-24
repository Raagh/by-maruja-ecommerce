import { MercadoPagoPaymentRequest } from 'mercadopago';
import { pipe } from 'fp-ts/lib/pipeable';
import { map } from 'fp-ts/lib/TaskEither';

import { createPreference } from './mercadopago.service';

export const createPaymentLink = (data: MercadoPagoPaymentRequest) =>
  pipe(
    createPreference(data),
    map((result) => (process.env.useMercadoPagoSandbox === 'true' ? result.response.init_point : result.response.sandbox_init_point))
  );
