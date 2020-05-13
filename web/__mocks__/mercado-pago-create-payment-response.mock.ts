import { MercadoPagoResponse } from 'mercadopago';

export const mock = {
  response: {
    additional_info: '',
    auto_return: '',
    back_urls: {
      failure: '',
      pending: '',
      success: '',
    },
    binary_mode: false,
    client_id: '7136722070390133',
    collector_id: 478787616,
    coupon_code: '',
    coupon_labels: '',
    date_created: '2020-05-01T18:15:21.308+00:00',
    expiration_date_from: '',
    expiration_date_to: '',
    expires: false,
    external_reference: '',
    id: '478787616-69da0d4e-a762-4f10-b7eb-574a8b501341',
    init_point: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=478787616-69da0d4e-a762-4f10-b7eb-574a8b501341',
    internal_metadata: '',
    items: [
      {
        id: '',
        category_id: '',
        currency_id: 'ARS',
        description: 'Multicolor Item',
        title: 'Dummy Item',
        quantity: 1,
        unit_price: 10,
      },
    ],
    marketplace: 'NONE',
    marketplace_fee: 0,
    metadata: {},
    notification_url: '',
    operation_type: 'regular_payment',
    payer: {
      phone: {
        area_code: '',
        number: '',
      },
      address: {
        zip_code: '',
        street_name: '',
        street_number: '',
      },
      email: '',
      identification: {
        number: '',
        type: '',
      },
      name: '',
      surname: '',
      date_created: '',
      last_purchase: '',
    },
    payment_methods: {
      default_card_id: '',
      default_payment_method_id: '',
      excluded_payment_methods: [
        {
          id: '',
        },
      ],
      excluded_payment_types: [
        {
          id: '',
        },
      ],
      installments: '',
      default_installments: '',
    },
    processing_modes: '',
    product_id: '',
    redirect_urls: {
      failure: '',
      pending: '',
      success: '',
    },
    sandbox_init_point: 'https://sandbox.mercadopago.com.ar/checkout/v1/redirect?pref_id=478787616-69da0d4e-a762-4f10-b7eb-574a8b501341',
    site_id: 'MLA',
    shipments: {
      default_shipping_method: '',
      receiver_address: {
        zip_code: '',
        street_name: '',
        street_number: '',
        floor: '',
        apartment: '',
        city_name: '',
        state_name: '',
        country_name: '',
      },
    },
    total_amount: '',
    last_updated: '',
  },
} as MercadoPagoResponse;
