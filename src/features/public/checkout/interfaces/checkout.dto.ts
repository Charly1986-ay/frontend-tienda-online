import type { IItemBase } from "../../../../shared/interfaces/item.base.dto";
import type { ICardStripe } from "./payments.dto";
import type { IItemPublic } from "./items.dto";
import type { InvoiceStatus } from "../../../../shared/types/invoice.status.enums";

interface IInvoiceBase {
  items: IItemBase[];
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