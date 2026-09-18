import { useQuery } from "@tanstack/react-query"
import type { IArticleQueryParams } from "../../../../shared/interfaces/article.query.params"
import { getAllArticles } from "../api/articles.api"

export const usePaginatedArticles = (params: IArticleQueryParams) => {
  return useQuery({
    queryKey: ['articles', params],
    queryFn: () => getAllArticles(params),
    staleTime: 1000 * 60 * 5, // 5 Minutes
  })
}
