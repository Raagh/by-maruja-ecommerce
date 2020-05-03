import { IncomingMessage, ServerResponse } from 'http';
import { MercadoPagoPaymentRequest } from 'mercadopago';
import createPaymentLink from '../../core/create-payment.service';
import configureMercadoPagoSDK from '../../core/mercadopago.service';

export default async (req: IncomingMessage, res: ServerResponse) => {
    configureMercadoPagoSDK();
    const paymentData = {
        items: [
          {
            title: 'Dummy Item',
            description: 'Multicolor Item',
            quantity: 1,
            currency_id: 'ARS',
            unit_price: 10.0,
          },
        ],
      } as MercadoPagoPaymentRequest;

    const response = await createPaymentLink(paymentData);

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
};
