import { useSearchParams } from "react-router-dom";
import type { IArticleQueryParams } from "../../../../shared/interfaces/article.query.params";
import { usePaginatedArticles } from "../hooks/usePaginatedArticles";
import { ArticleCard } from "../components/ArticleCard";
import { Paginator } from "../../../../shared/components/Paginator";
import { parsePositiveInt } from "../../../../shared/utils/parsers";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // 1. Extraemos los parámetros de la URL o asignamos valores por defecto
  const queryParams: IArticleQueryParams = {
    pageSize: Number(searchParams.get('pageSize') || 6),
    page: parsePositiveInt(searchParams.get('page'), 1),
    title: searchParams.get('title') || undefined,
    category: searchParams.get('category') || undefined,
    brands: searchParams.get('brands') || undefined,
  }

  // 2. Usamos tu hook (el puente con TanStack Query)
  const { data, isError, isLoading } = usePaginatedArticles(queryParams);

  if (isLoading) return <p>Cargando catálogo...</p>;
  if (isError) return <p>Hubo un error al cargar los artículos.</p>;

  // 3. Función para actualizar la URL cuando el usuario cambia de página o filtra
  const handlePageChange = (newPage: number) => {
    setSearchParams((prev) => {
      prev.set('page', String(newPage));
      return prev;
    });
  };

  return (
    <div className='home-page'>
      <h2>Catálogo de Productos ({data?.counter} encontrados)</h2>

      <div className='articles-grid'>
        {data?.articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={{
              id: article.id,
              title: article.title,
              slug: article.slug,
              stock: article.stock,
              price: article.price,
              // Forzamos a que TypeScript sepa que aquí ya hay un string gracias al fallback de la API
              image_url: article.image_url ?? 'not-photo_512.png',
            }}
            onAddToCart={(id) => console.log('Añadir al carrito:', id)}
          />
        ))}
      </div>

      {/* Controles simples de paginación */}
      <Paginator page={data?.page ?? 1} pages={data?.pages ?? 1} onPageChange={handlePageChange} />    
    </div>
  );
}
