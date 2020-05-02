declare module 'mercadopago' {
  export function configure(options: ConfigureOptions);
  export const preferences: Preferences;

  export interface ConfigureOptions {
    client_id?: string;
    client_secret?: string;
    access_token: string;
    sandbox?: boolean;
    show_promise_error?: boolean = true;
  }

  export interface PaymentItem {
    title: string;
    description: string;
    quantity: number;
    currency_id: string;
    unit_price: number;
  }

  export interface Preferences {
    schema: {
      additionalProperties: false;
      properties: {
        items: PaymentItem[];
        back_urls: {
          success: string;
          pending: string;
          failure: string;
        };
        auto_return: string;
        // tracks: [Object];
        // metadata: [Object];
        // payer: [Object];
        // payment_methods: [Object];
        // shipments: [Object];

        // notification_url: [Object];
        // mode: [Object];
        // additional_info: [Object];

        // external_reference: [Object];
        // expires: [Object];
        // expiration_date_from: [Object];
        // expiration_date_to: [Object];
        // collector_id: [Object];
        // client_id: [Object];
        // marketplace: [Object];
        // marketplace_fee: [Object];
        // differential_pricing: [Object];
        // taxes: [Object];
      };
    };
    partnersHeaders: true;
    create: Function;
    save: Function;
    update: Function;
    get: Function;
    findById: Function;
  }
}
