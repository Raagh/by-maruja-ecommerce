import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { device } from '../../../config/device';
// import { getCart } from '../../../../lamda-services/use-local-storage';
import CartEmpty from './cart-empty';
import Faq from '../faq';
import CartList from './cart-list';

const CartProductContainer = styled.div`
  margin: 0 1.5rem 0 1.5rem;
`;

const FaqWrapper = styled.div`
  @media ${device.large} {
    display: none;
  }
`;

const Cart = ({ isOpen }: { isOpen: boolean }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    /*     let newCart = getCart();
    if (newCart) setCart(newCart); */

    const test = [
      {
        _id: 'eec86419-9c39-4e02-93b0-dd83a978730c',
        image: {
          key: '1e1017634afe',
          type: 'image',
        },
        asset: {
          metadata: {
            type: 'sanity.imageMetadata',
            dimensions: {
              type: 'sanity.imageDimensions',
              aspectRatio: 1,
              height: 500,
              width: 500,
            },
            hasAlpha: false,
            isOpaque: true,
            lqip:
              'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMFBgj/xAAkEAACAgICAgAHAAAAAAAAAAABAgADBBEFMQYSEyEiMkFRUv/EABYBAQEBAAAAAAAAAAAAAAAAAAQCBf/EAB0RAAIDAAIDAAAAAAAAAAAAAAABAgMRBBITIVH/2gAMAwEAAhEDEQA/AOnOVzk4/Ee5x7Efav8AR/UzlvkuXXVi5BoUUWto77El85x7L1w9My1qx2RKzKK8hyWLxdFLfDoCkWA7GvzMPncm3zOFcsazF9bF01x6pyRvEb2RWHRG4hR6qAOgNRNxBCHMqS7GdLVDLroyu4DjsbDrayivVlh+pj8yYiHlGLuTz3hab6tFxEREEH//2Q==',
          },
          url:
            'https://cdn.sanity.io/images/x7biewak/maruja-dataset/70eef7174d55ae65f2e5ccc3f66829262cd79ff7-500x500.webp',
        },
        name: 'Anillos Ejemplo',
        price: 300,
        quantity: 1,
      },
      {
        _id: 'eec86419-9c39-4e02-93b0-dd83a978730c',
        image: {
          key: '1e1017634afe',
          type: 'image',
        },
        asset: {
          metadata: {
            type: 'sanity.imageMetadata',
            dimensions: {
              type: 'sanity.imageDimensions',
              aspectRatio: 1,
              height: 500,
              width: 500,
            },
            hasAlpha: false,
            isOpaque: true,
            lqip:
              'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMFBgj/xAAkEAACAgICAgAHAAAAAAAAAAABAgADBBEFMQYSEyEiMkFRUv/EABYBAQEBAAAAAAAAAAAAAAAAAAQCBf/EAB0RAAIDAAIDAAAAAAAAAAAAAAABAgMRBBITIVH/2gAMAwEAAhEDEQA/AOnOVzk4/Ee5x7Efav8AR/UzlvkuXXVi5BoUUWto77El85x7L1w9My1qx2RKzKK8hyWLxdFLfDoCkWA7GvzMPncm3zOFcsazF9bF01x6pyRvEb2RWHRG4hR6qAOgNRNxBCHMqS7GdLVDLroyu4DjsbDrayivVlh+pj8yYiHlGLuTz3hab6tFxEREEH//2Q==',
          },
          url:
            'https://cdn.sanity.io/images/x7biewak/maruja-dataset/70eef7174d55ae65f2e5ccc3f66829262cd79ff7-500x500.webp',
        },
        name: 'Anillos Ejemplo',
        price: 300,
        quantity: 3,
      },
    ];

    setCart(test);
  }, [isOpen]);

  return (
    <CartProductContainer>
      <CartEmpty cart={cart} />
      <CartList cart={cart} />
      <FaqWrapper>
        <Faq />
      </FaqWrapper>
    </CartProductContainer>
  );
};

export default Cart;
