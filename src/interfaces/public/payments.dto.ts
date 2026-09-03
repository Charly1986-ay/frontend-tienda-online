import type { TypeCurrency } from '../../types/payment.types';

interface IPaymentBase {
  invoiceId: number;
  amount: number; // Entero
  currency: TypeCurrency;
}

export interface IPaymentCreate extends IPaymentBase {

}

export interface IPaymentPublic extends IPaymentBase {
  id: number;
  status: string;
  createAt: string;
}

export interface ICardStripe {
  token: string
}