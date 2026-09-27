import type { UnitsType } from '../types/articles.enums';

export interface IArticleBase {
  title: string;
  slug: string;
  detail: string | null;
  stock: number;  
  price: string;  
  units_type: UnitsType;
  image_url: string | null;
}