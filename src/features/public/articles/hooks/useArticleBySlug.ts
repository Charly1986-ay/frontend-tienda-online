import { useQuery } from '@tanstack/react-query';
import { getArticleBySlug } from '../api/articles.api';

export const useArticleBySlug = (slug?: string) => {
  return useQuery({
    queryKey: ['article', slug],
    queryFn: () => getArticleBySlug(slug!),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
  });
};