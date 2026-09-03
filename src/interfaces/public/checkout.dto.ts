import type { InvoiceStatus } from '../../types/invoice.types';
import type { ICardStripe } from '../public/payments.dto';
import type { IItemPublic, IItemCreate } from '../public/invoice.items.dto';

interface IInvoiceBase {
  items: IItemCreate[];
}

export interface IInvoiceCreate extends IInvoiceBase {
  clientId: number;
  card: ICardStripe;
}

export interface IInvoicePublic extends IInvoiceBase {
  invoiceNumber: string;
  date: string;
  status: InvoiceStatus;
  fullName: string;
  items: IItemPublic[];
}