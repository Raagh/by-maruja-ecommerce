import React, { useContext, useState } from 'react';

import styled from 'styled-components';

import ErrorData from '../../config/error-alert-conf.json';
import MP from '../../config/mercado-pago';
import { store } from '../../context/store';
import { ActionTypes } from '../../model/action-types';

import { Product } from '../../model/product';
import ErrorAlert from '../shared/error-alert';
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
  const [showError, setShowError] = useState(false);
  const { dispatch } = useContext(store);

  const createProductForPurchase = () => {
    setShowError(false);
    return {
      _id: product._id,
      name: product.name,
      description: product.description ?? '',
      size: product.sizeChart ? product.sizeChart.find((x) => x.size === selectedSize)._key : '',
      quantity,
      price: !product?.discountPrice || product.discountPrice === 0 ? product.price : product.discountPrice,
      image: product.images[0].image,
      asset: product.images[0].asset,
    };
  };

  const addToCart = () => dispatch({ type: ActionTypes.Add, payload: createProductForPurchase() });

  const goToMercadoPago = () =>
    MP.confirmPurchase([createProductForPurchase()]).catch((_) => {
      setShowError(true);
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
        <PrimaryButton shouldLoad={true} onClick={goToMercadoPago} text="comprar con mercado pago" />
      </ExtraPaddedPrimaryButton>
      <PaddedPrimaryButton>
        <PrimaryButton inverted text="agregar al carrito" onClick={addToCart} />
      </PaddedPrimaryButton>
      <ErrorAlert isVisible={showError} title={ErrorData.cart.title} subtitle={ErrorData.cart.subtitle} />
    </section>
  );
};

export default ProductItemForm;
