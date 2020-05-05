import { MercadoPagoPaymentRequest } from 'mercadopago';
import { mocked } from 'ts-jest/utils';
import createPaymentLink from '../../src/core/create-payment.service';
import { configureMercadoPagoSDK } from '../../src/core/mercadopago.service';
import { createPreference } from '../../src/core/mercadopago.service';
import { mock as createPaymentMock } from '../../__mocks__/mercado-pago-create-payment-response.mock';

jest.mock('../../src/core/mercadopago.service');

beforeAll(() => {
  mocked(createPreference).mockResolvedValue({ response: createPaymentMock as any });
});

test('MercadoPago endpoint should return sandbox response for create payment endpoint when sandbox is enabled', async () => {
  // Arrange
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

  // Act
  const result = await createPaymentLink(paymentData);

  // Assert
  expect(result).toBeDefined();
  expect(result).toEqual(createPaymentMock.sandbox_init_point);
});

test('MercadoPago endpoint should return proper response for create payment endpoint', async () => {
  // Arrange
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
  process.env.useMercadoPagoSandbox = 'false';

  // Act
  const result = await createPaymentLink(paymentData);

  // Assert
  expect(result).toBeDefined();
  expect(result).toEqual(createPaymentMock.init_point);
});
