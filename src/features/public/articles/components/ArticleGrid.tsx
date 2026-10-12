import { ArticleCard } from '@/features/public/articles/components/ArticleCard';
import type { IArticlePublic } from '@/features/public/articles/interfaces/articles.dto';
import '@/features/public/articles/styles/ArticleGrid.css';

interface ArticleGridProps {
  articles: IArticlePublic[];
}

const ArticleGrid = ({ articles }: ArticleGridProps) => {
  return (
    <div className='product-grid'>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          id={ article.id }
          title={ article.title }
          slug={ article.slug }
          stock={ article.stock }
          price={ article.price }
          image={ article.image ?? 'not-photo_512.png' }         
        />
      ))}
    </div>
  )
}

export default ArticleGrid