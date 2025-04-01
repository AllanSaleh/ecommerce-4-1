import { Product } from '../../types/types';
import './ProductCard.css';
import StarRatings from "react-star-ratings"

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className='product-card'>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <h4>{product.category}</h4>
      <StarRatings
        rating={product.rating.rate}
        starRatedColor='gold'
        numberOfStars={5}
        starDimension ='30px'
        name='rating'
      />
      <img src={product.image} alt={product.title} className='product-image' />
      <p>{product.description}</p>
    </div>
  );
};
export default ProductCard;
