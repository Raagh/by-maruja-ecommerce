import { mocked } from 'ts-jest/utils';
import { getPayment } from '../../src/lamda-services/mercadopago.service';
import { sanityWriteClient as sanityClient } from '../../lib/sanity';

import { MercadoPagoPaymentDataResponse } from 'mercadopago';
import { updateSanityStock } from '../../src/lamda-services/stock-handling.service';
// import { Transaction } from '@sanity/client';

jest.mock('../../src/lamda-services/mercadopago.service');
jest.mock('../../lib/sanity');

test('if there is size it should update the stock in the size', async () => {
  // Arrange
  const mock: MercadoPagoPaymentDataResponse = {
    response: {
      external_reference: JSON.stringify([{ id: '1', quantity: 32, size: 'xs' }]),
    },
  };
  const mockedGetPayment = mocked(getPayment).mockResolvedValue(mock);
  const mockedSanityClientTransaction = mocked(sanityClient.transaction).mockReturnValue({ commit: () => {} } as any);

  // Act
  await updateSanityStock('1');

  // Assert
  expect(mockedGetPayment).toBeCalledWith('1');
  expect(mockedSanityClientTransaction).toBeCalledWith([
    { patch: { dec: { 'sizeChart[_key == "xs"].stock': 32 }, id: '1' } },
  ]);
});

test('if there is no size it should update normal stock', async () => {
  // Arrange
  const mock: MercadoPagoPaymentDataResponse = {
    response: {
      external_reference: JSON.stringify([{ id: '1', quantity: 32, size: '' }]),
    },
  };
  const mockedGetPayment = mocked(getPayment).mockResolvedValue(mock);
  const mockedSanityClientTransaction = mocked(sanityClient.transaction).mockReturnValue({ commit: () => {} } as any);

  // Act
  await updateSanityStock('1');

  // Assert
  expect(mockedGetPayment).toBeCalledWith('1');
  expect(mockedSanityClientTransaction).toBeCalledWith([{ patch: { dec: { stock: 32 }, id: '1' } }]);
});
