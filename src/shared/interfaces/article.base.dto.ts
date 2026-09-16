import type { UnitsType } from '../types/articles.enums';

export interface IArticleCard {
  id: number;
  title: string;  
  slug: string;
  stock: number; // entero
  price: string; // decimal
  imageURL: string;
}

export interface IArticleBase {
  title: string;
  slug: string;
  detail: string | null;
  stock: number;  
  price: string;  
  unitsType: UnitsType;
  imageURL: string | null;
}