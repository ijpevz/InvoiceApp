export interface Invoice {
  id: string;
  invoiceNumber: string;
  invoiceDate: string;
  customerId: string;
  items: InvoiceItem[];

  subtotal: number;
  discount: number;
  vatRate: number;
  vateAmount: number;
  totalAmount: number;

  status: InvoiceStatus;

  birStatus: BirTransmissionStatus;
  birReferenceNumber?: string;
}

export interface InvoiceItem {
  productId: string;
  description: string;
  quantity: number;
  unitPrice: number;
  discount: number;
  vatAmount: number;
  lineTotal: number;
}

export enum InvoiceStatus {
  DRAFT = 'DRAFT',
  ISSUED = 'ISSUED',
  CANCELLED = 'CANCELLED',
  VOIDED = 'VOIDED'
}

export enum BirTransmissionStatus {
  NOT_SUBMITTED = 'NOT_SUBMITTED',
  PENDING = 'PENDING',
  SUBMITTED = 'SUBMITTED',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  FAILED = 'FAILED'
}