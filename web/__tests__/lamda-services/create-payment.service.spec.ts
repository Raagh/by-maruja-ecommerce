import { mocked } from 'ts-jest/utils';
import createPaymentLink from '../../src/lamda-services/create-payment.service';
import { configureMercadoPagoSDK, createPreference } from '../../src/lamda-services/mercadopago.service';

import { mock as paymentData } from '../../__mocks__/mercado-pago-create-payment-request.mock';
import { mock as createPaymentMock } from '../../__mocks__/mercado-pago-create-payment-response.mock';

jest.mock('../../src/lamda-services/mercadopago.service');

beforeAll(() => {
  configureMercadoPagoSDK();
  mocked(createPreference).mockResolvedValue(createPaymentMock);
});

test('MercadoPago endpoint should return sandbox response for create payment endpoint when sandbox is enabled', async () => {
  // Act
  const result = await createPaymentLink(paymentData);

  // Assert
  expect(result).toBeDefined();
  expect(result).toEqual(createPaymentMock.response.sandbox_init_point);
});

test('MercadoPago endpoint should return proper response for create payment endpoint', async () => {
  // Arrange
  process.env.useMercadoPagoSandbox = 'false';

  // Act
  const result = await createPaymentLink(paymentData);

  // Assert
  expect(result).toBeDefined();
  expect(result).toEqual(createPaymentMock.response.init_point);
});
