import type { UnitsType } from '../../../../shared/types/articles.enums';
import type { IArticleBase } from '../../../../shared/interfaces/article.base.dto';
import type { StatusArticle } from '../types/articles.enums';

export interface IArticleCreate extends IArticleBase {  
  cost: number;
  brandId: number;
  categoryId: number;
}

export interface IArticleUpdate {
  title?: string;
  detail?: string;
  unitsType?: UnitsType;
  imageURL?: string;
}

export interface IUpdateArticleStock {
  stock: number; 
}

export interface IUpdateArticlePrice {
  cost?: number; 
  price: number;
}

export interface IUpdateArticleBrand {
  brandId: number;
}

export interface IUpdateArticleCategory {
  categoryId: number;
}

export interface IArticleStatus{
  status: StatusArticle; 
}

export interface IArticleResponse extends IArticleBase {
  id: number; // Campo exclusivo de la respuesta
  cost: number;
  brand: string;
  category: string;
  status: StatusArticle;
}

export interface IArticlePaginationResponse {
  counter: number; 
  pages: number;
  offset: number;
  page: number;
  page_size: number;
  articles: IArticleResponse[];
}