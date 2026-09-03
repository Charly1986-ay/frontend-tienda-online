export type UserStatus = 
    | { type: 'ACTIVE', value: 'active' } 
    | { type: 'INACTIVE', value: 'inactive' }   


export type Role = 
    | { type: 'CLIENT', value: 'client' } 
    | { type: 'ECOMMERCE_ASSISTANT', value: 'E-commerce Assistant' }   
    | { type: 'MANAGER', value: 'manager' } 