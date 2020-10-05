import React, { useContext, useState } from 'react';

import styled from 'styled-components';
import { ErrorMessages } from '../../config/error-messages';
import MP from '../../config/mercado-pago';
import { store } from '../../context/store';
import { ActionTypes } from '../../model/action-types';

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

  const createProductForPurchase = () => {
    return {
      _id: product._id,
      name: product.name,
      size: selectedSize,
      quantity,
      price: !product?.discountPrice || product.discountPrice === 0 ? product.price : product.discountPrice,
      image: product.images[0].image,
      asset: product.images[0].asset,
    };
  };

  const addToCart = () => dispatch({ type: ActionTypes.Add, payload: createProductForPurchase() });

  const goToMercadoPago = () =>
    MP.confirmPurchase([createProductForPurchase()]).catch((_) => {
      throw new Error(ErrorMessages.Purchase);
    });

  const setQuantityIfThereIsStock = (selectedQuantity: number) => {
    if (selectedQuantity <= 0) return;

    if (product.sizeChart) {
      const stockBySize = product.sizeChart.find((x) => x.size === selectedSize).stock;
      if (selectedQuantity <= stockBySize) setQuantity(selectedQuantity);
    } else if (selectedQuantity <= product.stock) setQuantity(selectedQuantity);
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
        <PrimaryButton onClick={goToMercadoPago} text="comprar con mercado pago" />
      </ExtraPaddedPrimaryButton>
      <PaddedPrimaryButton>
        <PrimaryButton inverted text="agregar al carrito" onClick={addToCart} />
      </PaddedPrimaryButton>
    </section>
  );
};

export default ProductItemForm;
