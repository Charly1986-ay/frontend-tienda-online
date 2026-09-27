import { ArticleCard } from '../components/ArticleCard';
import type { IArticlePublic } from '../interfaces/articles.dto';
import '../styles/ArticleGrid.css';

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
          image_url={ article.image_url ?? 'not-photo_512.png' }         
        />
      ))}
    </div>
  )
}

export default ArticleGrid