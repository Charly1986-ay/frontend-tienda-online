import { api } from '../../../../shared/api/api';
import type { IArticleQueryParams } from '../../../../shared/interfaces/article.query.params';
import type { IArticlePaginationPublic } from '../interfaces/articles.dto';


export const getAllArticles = async (params: IArticleQueryParams): Promise<IArticlePaginationPublic> => {
  try {
    const response = await api<IArticlePaginationPublic>('/public/articles/all', {
      params: {
        page_size: params.pageSize,
        page: params.page,
        title: params.title,
        category: params.category,
        brands: params.brands,
        sort_by: params.sortBy,
        sort_order: params.sortOrder,
      }
    })

    return response.data;
  } catch (error) {
    return {
      counter: 0,
      pages: 0,
      offset: 0,
      page: 1,
      page_size: params.pageSize || 10,
      articles: []
    };
  }
}