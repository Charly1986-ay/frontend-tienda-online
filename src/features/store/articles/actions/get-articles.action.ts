import { api } from '@/shared/api/api';

import type { 
  IArticleQueryParams 
} from '@/shared/interfaces/article.query.params';

import type { 
  IArticlePaginationPublic 
} from '@/features/store/articles/interfaces/articles.dto';
import { getImageURL } from '@/shared/utils/getImageURL';


export const getAllArticles = async (
  params: IArticleQueryParams
): Promise<IArticlePaginationPublic> => {
  try {
    const response = await api<IArticlePaginationPublic>('/store/articles/all', {
      params: {
        page_size: params.pageSize,
        page: params.page,
        title: params.title,
        category: params.category,
        brands: params.brands,
        sort_by: params.sortBy,
        sort_order: params.sortOrder,
      }
    });

    const data = response.data;

    const formattedArticles = data.articles.map((article) => ({
      ...article,
      image_url: getImageURL(article.image)
    }));

    return {
      ...data,
      articles: formattedArticles,
    };

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
