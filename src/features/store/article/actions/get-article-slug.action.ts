import { api } from "@/shared/api/api";
import { getImageURL } from "@/shared/utils/getImageURL";

import type { 
  IArticlePublic 
} from "@/features/store/articles/interfaces/articles.dto";

export const getArticleBySlug = async (
  slug: string
): Promise<IArticlePublic> => {
  const response = await api<IArticlePublic>(
    `/store/articles/${slug}`
  );

  const data = response.data;

  return {
    ...data,
    image: getImageURL(data.image),
  };
};