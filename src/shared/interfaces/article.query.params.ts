import type { ArticleSortField } from "@/shared/types/articles-sort.type";

export interface IArticleQueryParams {
  pageSize?: number;
  page?: number;
  title?: string;
  category?: string;
  brands?: string;
  sortBy?: ArticleSortField;
  sortOrder?: 'asc' | 'desc';
}