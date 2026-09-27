import { useParams } from "react-router-dom";
import { useArticleBySlug } from "../hooks/useArticleBySlug";
import { ArticleViewDetail } from "../components/ArticleViewDetail";

export const ArticleViewPage = () => {
  const { idSlug } = useParams();

  const {
    data: article,
    isLoading,
    isError,
  } = useArticleBySlug(idSlug);

  console.log('ARTICLE:', article);

  if (isLoading) {
    return <p>Cargando artículo...</p>;
  }

  if (isError || !article) {
    return <p>No se pudo encontrar el artículo.</p>;
  }

  return (
    <ArticleViewDetail
      article={article}
      onAddToCart={ () => console.log('se agrego el articulo') }
    />
  );
};