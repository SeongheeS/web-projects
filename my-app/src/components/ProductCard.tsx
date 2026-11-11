import type { Product } from '../data/products';


type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};


export default function ProductCard({
  product, onAddToCart,
}: ProductCardProps) {
  const { title, price, imageUrl, inStock } = product; // 기존 return과 카드 JSX를 이 위치에 유지

  return (
    <article className="product-card">
      <img src={imageUrl} alt={title} />
      <div className="product-info">
        <h2>{title}</h2>
        <p className="price">
          ${price.toLocaleString('en-US')} {/* 원화 표시: <p className="price">{price.toLocaleString()}원</p> */}
        </p>
        <p>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </p>
        <button className="add-button" disabled={!inStock}>
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </article>
 );
            
}