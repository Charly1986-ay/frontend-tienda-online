import type { UnitsType, StatusArticle } from '../../types/articles.types';

export interface IArticleBase {
  detail: string;
  stock: number; // entero
  cost: number; // decimal
  price: number; // decimal
  brandId: number; // entero
  categoryId: number; // entero
  unitsType: UnitsType;
  status: StatusArticle;
  imageURL: string;
}

export interface IArticleCreate extends IArticleBase {
  // Aquí puedes añadir campos exclusivos para la creación si los hubiera
}

export interface IArticleUpdate{
  detail?: string;
  unitsType?: UnitsType;
  imageURL?: string;
}

export interface IUpdateArticleStock{
  stock: number; 
}

export interface IUpdateArticlePrice{
  cost?: number; 
  price: number;
}

export interface IUpdateArticleBrand{
  brandId: number;
}

export interface IUpdateArticleCategory{
  categoryId: number;
}

export interface IArticleStatus{
  status: StatusArticle; 
}

export interface IArticleResponse extends IArticleBase {
  id: number; // Campo exclusivo de la respuesta
}

export interface IArticlePaginationResponse{
  counter: number; 
  pages: number;
  offset: number;
  page: number;
  page_size: number;
  articles: IArticleResponse[];
}