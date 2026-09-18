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
    });

    const data = response.data;

    // Transformamos las URLs de las imágenes de cada artículo asegurando la barra intermedia
    const IMAGE_URL = import.meta.env.VITE_IMAGE_URL || '';

    const formattedArticles = data.articles.map((article) => ({
      ...article,
      image_url: article.image_url
        ? `${IMAGE_URL}/${article.image_url}`
        : `${IMAGE_URL}/not-photo_512.png`,
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
};