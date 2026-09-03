export type UnitsType = 
    | { type: 'UNITS', value: 'units' }
    | { type: 'LITER', value: 'liter' }
    | { type: 'GRAM', value: 'gram' }
    | { type: 'METRO', value: 'metro' }


export type StatusArticle = 
    | { type: 'AVAILABLE', value: 'available' }
    | { type: 'UNAVAILABLE', value: 'unavailable' }  


export type ArticleSortField = 
    | { type: 'ID', value: 'id' }
    | { type: 'DETAIL', value: 'detalle' }  
    | { type: 'BRAND', value: 'marca' }
    | { type: 'CATEGORY', value: 'categoria' }