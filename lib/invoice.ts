interface InvoiceSender {
  senderName: string;
  senderAddress: string;
  senderZipCode: string;
  senderCity: string;
  senderCountry: string;
  senderEmail: string;
  senderPhone: string;
  senderVATNumber?: string;
}
interface InvoiceReceiver {
  receiverName: string;
  receiverAddress: string;
  receiverZipCode: string;
  receiverCity: string;
  receiverCountry: string;
  receiverEmail: string;
  receiverPhone: string;
  receiverVATNumber?: string;
}

interface Item {
  itemName: string;
  description?: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

interface TaxDetails {
  taxRate?: number;
  taxRateType?: 'percentage' | 'amount';
  taxID?: string;
  totalTaxAmount?: number;
}

interface DiscountDetails {
  discountRate?: number;
  discountRateType?: 'percentage' | 'amount';
}

interface ShippingDetails {
  shippingCost?: number;
}
interface InvoiceDetails {
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  purchaseOrderNumber?: string;
  currency: string;
  language: string;
  items: Item[];
  subTotal: number;
  taxDetails?: TaxDetails;
  discountDetails?: DiscountDetails;
  shippingDetails?: ShippingDetails;
  totalAmount: number;
  additionalNotes?: string;
  paymentTerms: string;
}

interface Invoice {
  sender: InvoiceSender;
  receiver: InvoiceReceiver;
  details: InvoiceDetails;
}

export type { Invoice };
