import axios from 'axios';
import { render, shallow } from 'enzyme';
import React from 'react';
import { mocked } from 'ts-jest/utils';
import Index from '../../src/pages/index';
import { mock as paymentDataRequest } from '../../__mocks__/mercado-pago-create-payment-request.mock';
import { mock as paymentDataReponse } from '../../__mocks__/mercado-pago-create-payment-response.mock';

jest.mock('axios');

it('should render Welcome', () => {
  const wrapper = render(<Index />);

  expect(wrapper.text()).toContain('Welcome to Next.js');
});

it('should render a button', () => {
  const wrapper = render(<Index />);

  expect(wrapper.find('button').length).toEqual(1);
});

it('button should say "Call MercadoPago"', () => {
  const wrapper = render(<Index />);

  expect(wrapper.find('button').text()).toEqual('Call MercadoPago');
});

it('when button is clicked the api request should have the correct values', () => {
  const wrapper = shallow(<Index />);
  const mockedPost = mocked(axios.post);
  mockedPost.mockResolvedValue(paymentDataReponse.init_point);

  wrapper.find('button').simulate('click');

  expect(axios.post).toBeCalledTimes(1);
  expect(axios.post).toBeCalledWith('http://localhost:3000/api/create-payment', paymentDataRequest);
});
