import axios from 'axios';
import { render, shallow } from 'enzyme';
import React from 'react';
import { mocked } from 'ts-jest/utils';
import Index from '../../src/pages/testing';
import { mock as paymentDataRequest } from '../../__mocks__/mercado-pago-create-payment-request.mock';
import { mock as paymentDataReponse } from '../../__mocks__/mercado-pago-create-payment-response.mock';
import { mock as productMock } from '../../__mocks__/product.mock';

jest.mock('axios');

const product = productMock as any;

it('should render the title', () => {
  const wrapper = render(<Index {...product} />);

  expect(wrapper.text()).toContain('This is a title');
});

it('should render a button', () => {
  const wrapper = render(<Index {...product} />);

  expect(wrapper.find('button').length).toEqual(3);
});

it('button should say "Call MercadoPago"', () => {
  const wrapper = render(<Index {...product} />);

  expect(wrapper.find('button').text()).toContain('Call MercadoPago');
});

it('button should say "Call Instagram Feed"', () => {
  const wrapper = render(<Index {...product} />);

  expect(wrapper.find('button').text()).toContain('Call Instagram Feed');
});

it('when button is clicked the api request should have the correct values', () => {
  const wrapper = shallow(<Index {...product} />);
  const mockedPost = mocked(axios.post);
  mockedPost.mockResolvedValue(paymentDataReponse.response.init_point);

  wrapper.find('button').first().simulate('click');

  expect(axios.post).toBeCalledTimes(1);
  expect(axios.post).toBeCalledWith('/api/create-payment', paymentDataRequest);
});
