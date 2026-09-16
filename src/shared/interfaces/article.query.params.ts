import type { ArticleSortField } from "../types/articles.enums";

export interface IArticleQueryParams {
  pageSize?: number;
  page?: number;
  title?: string;
  category?: string;
  brands?: string;
  sortBy?: ArticleSortField;
  sortOrder?: 'asc' | 'desc';
}