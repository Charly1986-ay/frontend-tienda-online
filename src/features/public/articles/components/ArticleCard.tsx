import { Link } from 'react-router-dom';
import type { IArticleCard } from '../../../../shared/interfaces/article.base.dto'

interface ArticleCardProps {
  article: IArticleCard;
  onAddToCart: (id: number) => void;
}

export const ArticleCard = ({ article, onAddToCart }: ArticleCardProps) => {
  return (
    <div className='product-card'>
      <Link to={`/products/${article.slug}`}>
        {article.imageURL ? (
          <img
            src={article.imageURL}
            alt={article.title}
            className='product-card-image'
          />
        ) : (
          <div className='product-card-image-placeholder'>
            {article.title}
          </div>
        )}
      </Link>

      <h4 className='product-card-title'>
        {article.title}
      </h4>

      <div className='product-card-price'>
        ${article.price}
      </div>

      <button
        className='btn-primary'
        onClick={() => onAddToCart(article.id)}
      >
        Añadir al carrito
      </button>
    </div>
  )
}
