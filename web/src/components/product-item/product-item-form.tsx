import React, { useContext, useState } from 'react';

import styled from 'styled-components';
import { store } from '../../context/store';
import { ActionTypes } from '../../model/action-types';
import { CartProduct } from '../../model/cart-product';

import { Product } from '../../model/product';
import PrimaryButton from '../shared/primary-button';

import ProductItemSelectors from './product-item-selectors';

const PaddedPrimaryButton = styled.div`
  margin-top: 1rem;
`;

const ExtraPaddedPrimaryButton = styled.div`
  margin-top: 2rem;
`;

const ProductItemForm = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizeChart ? product.sizeChart[0].size : '');
  const { dispatch } = useContext(store);

  const addToCart = () => {
    const newProduct: CartProduct = {
      _id: product._id,
      name: product.name,
      size: selectedSize,
      quantity,
      price: product.discountPrice === 0 ? product.price : product.discountPrice,
      image: product.images[0].image,
      asset: product.images[0].asset,
    };

    dispatch({ type: ActionTypes.Add, payload: newProduct });
  };

  const goToMercadoPago = () => console.log('going to mercadopago');

  const setQuantityIfThereIsStock = (selectedQuantity: number) => {
    if (selectedQuantity <= 0) return;
    const stockBySize = product.sizeChart.find((x) => x.size === selectedSize).stock;

    if (selectedQuantity <= stockBySize) setQuantity(selectedQuantity);
  };

  const setSelectedSizeAndResetQuantity = (internalSize: string) => {
    setSelectedSize(internalSize);
    setQuantity(1);
  };

  return (
    <section>
      <ProductItemSelectors
        product={product}
        quantity={quantity}
        setQuantity={setQuantityIfThereIsStock}
        size={selectedSize}
        setSize={setSelectedSizeAndResetQuantity}
      />
      <ExtraPaddedPrimaryButton>
        <PrimaryButton onClick={goToMercadoPago} text="Comprar con mercado pago" />
      </ExtraPaddedPrimaryButton>
      <PaddedPrimaryButton>
        <PrimaryButton inverted text="Agregar al Carrito" onClick={addToCart} />
      </PaddedPrimaryButton>
    </section>
  );
};

export default ProductItemForm;
