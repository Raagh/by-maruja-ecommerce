import * as createPaymentMock from './mercado-pago-create-payment-request.mock';

const create = jest.fn();
create.mockReturnValue({ response: createPaymentMock.mock });

export const configure = jest.fn();
export const preferences = { create };
