import type { UnitsType } from '../types/articles.enums';

export interface IArticleCard {
  id: number;
  title: string;  
  slug: string;
  stock: number; // entero
  price: string; // decimal
  image_url: string;
}

export interface IArticleBase {
  title: string;
  slug: string;
  detail: string | null;
  stock: number;  
  price: string;  
  units_type: UnitsType;
  image_url: string | null;
}