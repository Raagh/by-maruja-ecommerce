import { tryCatch, map } from 'fp-ts/lib/TaskEither';
import { toError } from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/lib/pipeable';
import { SanityDocument } from '@sanity/client';
import { sanityWriteClient as sanityClient } from '../../lib/sanity';
import { Product, ProductSizeChart } from '../model/product';
import { getPayment } from './mercadopago.service';

const updateStockFromSize = async (id: string, amount: number, size?: string) => {
  const document = await sanityClient.getDocument<Product>(id);
  document.sizeChart.find((x: ProductSizeChart) => x._key === size).stock -= amount;

  return sanityClient.patch(id).set(document).commit();
};

export const updateSanityStock = async (paymentId: string) => {
  const paymentData = await getPayment(paymentId);
  const references = JSON.parse(paymentData.response.external_reference);

  for (const reference of references) {
    const { id, size, quantity } = reference;

    if (size) {
      return pipe(
        tryCatch(() => updateStockFromSize(id, quantity, size), toError),
        map((result: SanityDocument<Product>) => !!result)
      );
    }

    const result = !!sanityClient.patch(id).dec({ stock: quantity }).commit();

    if (!result) return result;
  }

  return true;
};
