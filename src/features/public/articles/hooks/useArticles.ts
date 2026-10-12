import { useQuery } from '@tanstack/react-query';
import { getAllArticles } from '@/features/public/articles/actions/get-articles.action';
import type { IArticleQueryParams } from '@/shared/interfaces/article.query.params';

export const useArticles = (params: IArticleQueryParams) => {
  return useQuery({    
    queryKey: ['articles', params],
    queryFn: () => getAllArticles(params),
    placeholderData: (previousData) => previousData, // Evita parpadeos molestos al cambiar de página
    staleTime: 1000 * 60 * 5, 
  });
};