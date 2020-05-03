import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { mock as createPaymentMock } from '../../__mocks__/mercado-pago-create-payment.mock';


import Index from '../../src/pages/index';

let container: HTMLDivElement = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('should render Welcome', () => {
  act(() => {
    render(<Index />, container);
  });

  expect(container.textContent).toContain('Welcome to Next.js');
});

it('should render a button', () => {
  act(() => {
    render(<Index />, container);
  });

  expect(container.getElementsByTagName('button').length).toEqual(1);
});

it('button should say "Call MercadoPago"', () => {
  act(() => {
    render(<Index />, container);
  });

  expect(container.getElementsByTagName('button')[0].textContent).toEqual('Call MercadoPago');
})

it('On clicking MercadoPago Button, I should see the link to MercadoPago', () => {
  act(() => {
    render(<Index />, container);
  });

  const mercadoPagoButton = container.getElementsByTagName('button')[0];
  mercadoPagoButton.click();
  expect(container.textContent).toContain(createPaymentMock.init_point);;
})


