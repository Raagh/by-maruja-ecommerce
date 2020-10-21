export interface PaymentRequest {
  items: PaymentItem[];
}

export interface PaymentItem {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  size: string;
  pictureUrl: string;
}
