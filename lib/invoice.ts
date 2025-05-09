interface InvoiceSender {
  senderName: string;
  senderAddress: string;
}
interface InvoiceReceiver {}
interface InvoiceDetails {}

interface Invoice {
  sender: InvoiceSender;
  receiver: InvoiceReceiver;
  details: InvoiceDetails;
}

export type { Invoice };
