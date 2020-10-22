import { mount, shallow } from 'enzyme';
import Link from 'next/link';
import React from 'react';
import ProductItemDisplay from '../../../src/components/product-item/product-item';
import ProductItemCarousel from '../../../src/components/product-item/product-item-carousel';
import PaymentDescription from '../../../src/components/shared/payment-description';
import { mock as product } from '../../../__mocks__/product.mock';

describe('ProductItemDisplay component', () => {
  it('should render', () => {
    const wrapper = shallow(<ProductItemDisplay product={product} hasStock={false} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render all main components component', () => {
    const wrapper = mount(<ProductItemDisplay product={product} hasStock={false} />);

    expect(wrapper.find(Link).length).toEqual(1);
    expect(wrapper.find(Link).first().prop('href')).toEqual('/categories/productos');
    expect(wrapper.find('img').length).toBe(5);
    expect(wrapper.find('p').length).toBe(3);
    expect(wrapper.find('div').some((x) => x.text().includes('Volver al listado')));
    expect(wrapper.find(ProductItemCarousel).length).toEqual(1);
    expect(
      wrapper
        .find('p')
        .some((x) => x.text().includes('Dejanos tu email y te avisamos cuando esté disponible nuevamente'))
    );
  });

  it('should render all main components component if hasStock equals true', () => {
    const wrapper = mount(<ProductItemDisplay product={product} hasStock={true} />);

    expect(wrapper.find(Link).length).toEqual(1);
    expect(wrapper.find('img').length).toBe(10);
    expect(wrapper.find('p').length).toBe(12);
    expect(wrapper.find(PaymentDescription).length).toEqual(1);
  });
});
