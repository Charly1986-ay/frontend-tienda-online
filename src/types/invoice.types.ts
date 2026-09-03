export type InvoiceStatus = 
    | { type: 'PENDING', value: 'pending' } //Pendiente de pago
    | { type: 'PAID', value: 'paid' }   //Pagada
    | { type: 'VOIDED', value: 'voided' }   //Anulada
    | { type: 'REFUNDED', value: 'refunded' }   //Reembolsada


export type InvoiceSortField = 
    | { type: 'ID', value: 'pid' } 
    | { type: 'NUMBER', value: 'number' }   
    | { type: 'FULLNAME', value: 'fullname' } 
    | { type: 'DATE', value: 'date' }
    | { type: 'TOTAL', value: 'total' }