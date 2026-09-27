import { useState } from 'react';
import type { IItemBase } from '../interfaces/item.base.dto';

export const useCart = () => {
  const [ items, setItems ] = useState<IItemBase[]>(() => {
    try {
      const itemsStorage = localStorage.getItem('articles');

      return itemsStorage ? JSON.parse(itemsStorage) : [];
    } catch (error) {
      console.log(error);
    }
  });  

  const handleAddCart = (newItem: IItemBase) => {
    const updatedCart = [...items, newItem];    
    // Actualizamos el estado de React
    setItems(updatedCart);    
    // Guardamos en localStorage
    localStorage.setItem('articles', JSON.stringify(updatedCart));
  }

  const handleRemoveCart = (index: number) => {
    // Filtramos el array excluyendo el índice que queremos borrar (inmutable)
    const updatedCart = items.filter((_, i) => i !== index);    
    // Actualizamos el estado de React
    setItems(updatedCart);    
    // Actualizamos localStorage
    localStorage.setItem('articles', JSON.stringify(updatedCart));
  }

  const handleRemoveAll = () => {
    setItems([]);
    localStorage.setItem('articles', JSON.stringify([]));
  }

  return {
    // Props
    items,
    counter: items.length,

    // Methods
    handleAddCart,
    handleRemoveCart,
    handleRemoveAll
  }
}