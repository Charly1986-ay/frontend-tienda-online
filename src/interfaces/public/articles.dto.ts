import type { UnitsType, StatusArticle } from '../../types/articles.types';

export interface IArticlePublic {
  id: number;
  detail: string;
  price: number; // decimal
  unitsType: UnitsType;
  brandId: number; // entero
  categoryId: number; // entero  
  imageURL: string;
  status: StatusArticle;  
}

export interface IArticlePublicPagination{
  counter: number; 
  pages: number; 
  offset: number; 
  page: number;
  page_size: number;
  articles: IArticlePublic[];
}