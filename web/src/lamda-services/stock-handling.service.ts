import { sanityWriteClient as sanityClient } from '../../lib/sanity';
import { getPayment } from './mercadopago.service';

type Reference = {
  id: string;
  size: string;
  quantity: number;
};

export const updateSanityStock = async (paymentId: string) => {
  const paymentData = await getPayment(paymentId);
  const references: Reference[] = JSON.parse(paymentData.response.external_reference);

  const patches = references.map((reference) => {
    const { id, quantity, size } = reference;

    const patch = {
      patch: {
        id,
        dec: {} as any,
      },
    };

    if (size) {
      const property = `sizeChart[_key == "${size}"].stock`;
      patch.patch.dec[property] = quantity;
    } else patch.patch.dec = { stock: quantity };

    return patch;
  });

  sanityClient.transaction(patches).commit();
};
