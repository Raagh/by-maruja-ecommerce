import React from 'react';
import { CartProduct as CP } from '../../../../model/cart-product';

const SingleItem = ({ product }: { product: CP }) => {
  return <div>{product.name}</div>;
};

export default SingleItem;
