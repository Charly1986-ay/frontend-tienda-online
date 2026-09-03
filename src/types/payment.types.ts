export type PaymentStatus = 
    | { type: 'PENDING', value: 'pending' } 
    | { type: 'COMPLETED', value: 'completed' }   
    | { type: 'FAILED', value: 'failed' } 
    | { type: 'REFUNDED', value: 'refunded' }


export type TypeCurrency = 
    | { type: 'USD', value: 'usd' } 
    | { type: 'EUR', value: 'eur' }   
    | { type: 'ARS', value: 'ars' } 