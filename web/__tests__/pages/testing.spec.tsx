import axios from 'axios';
import { render, shallow } from 'enzyme';
import React from 'react';
import { mocked } from 'ts-jest/utils';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Index from '../../src/pages/testing';
import { mock as paymentDataRequest } from '../../__mocks__/mercado-pago-create-payment-request.mock';
import { mock as paymentDataReponse } from '../../__mocks__/mercado-pago-create-payment-response.mock';

jest.mock('axios');

const product = {
  name: '',
  price: 0,
  stock: 0,
  image: null as SanityImageSource,
  description: '',
};

it('should render the title', () => {
  const wrapper = render(<Index {...product} />);

  expect(wrapper.text()).toContain('This is a title');
});

it('should render a button', () => {
  const wrapper = render(<Index {...product} />);

  expect(wrapper.find('button').length).toEqual(1);
});

it('button should say "Call MercadoPago"', () => {
  const wrapper = render(<Index {...product} />);

  expect(wrapper.find('button').text()).toEqual('Call MercadoPago');
});

it('when button is clicked the api request should have the correct values', () => {
  const wrapper = shallow(<Index {...product} />);
  const mockedPost = mocked(axios.post);
  mockedPost.mockResolvedValue(paymentDataReponse.response.init_point);

  wrapper.find('button').simulate('click');

  expect(axios.post).toBeCalledTimes(1);
  expect(axios.post).toBeCalledWith('/api/create-payment', paymentDataRequest);
});
