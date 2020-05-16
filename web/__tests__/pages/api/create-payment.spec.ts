import { createRequest, createResponse } from 'node-mocks-http';
import { mocked } from 'ts-jest/utils';
import createPaymentLink from '../../../src/api/create-payment.service';
import createPayment from '../../../src/pages/api/create-payment';
import { mock as paymentDataRequest } from '../../../__mocks__/mercado-pago-create-payment-request.mock';
import { mock as paymentDataReponse } from '../../../__mocks__/mercado-pago-create-payment-response.mock';

jest.mock('../../../src/core/create-payment.service');

test('createPayment api should return 200 when passed correct data', async () => {
  // Arrange
  const request = createRequest({
    method: 'POST',
    url: '/create-payment',
    body: {
      paymentDataRequest,
    },
  });
  mocked(createPaymentLink).mockResolvedValue(paymentDataReponse.response.init_point);
  const response = createResponse();

  // Act
  await createPayment(request, response);

  // Assert
  expect(response.statusCode).toEqual(200);
});

test('createPayment api should return init_point when passed correct data', async () => {
  // Arrange
  const request = createRequest({
    method: 'POST',
    url: '/create-payment',
    body: {
      paymentDataRequest,
    },
  });
  mocked(createPaymentLink).mockResolvedValue(paymentDataReponse.response.init_point);
  const response = createResponse();

  // Act
  await createPayment(request, response);

  // Assert
  expect(response._getJSONData()).toEqual(paymentDataReponse.response.init_point);
});
