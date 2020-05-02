// import { mock as createPaymentMock } from '../../__mocks__/mercado-pago-create-payment.mock';
import configure from '../../src/core/configure-mercadopago';
import createPayment from '../../src/core/create-payment.service';

test('MercadoPago endpoint should return proper response for create payment endpoint', async () => {
  // Arrange
  configure();
  const paymentData = {
    items: [
      ({
        title: 'Dummy Item',
        description: 'Multicolor Item',
        quantity: 1,
        currency_id: 'ARS',
        unit_price: 10.0,
      } as unknown) as PaymentItem,
    ],
  };

  // Act
  const result = await createPayment(paymentData);

  // Assert
  expect(result).toBeDefined();
  expect(result).toContain('https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=');
});
