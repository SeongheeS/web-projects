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
        {/* 재고 여부에 따른 글씨 색상 변경을 위한 서로 다른 CSS 클래스 지정 */}
        <p className={inStock ? 'in-stock' : 'out-of-stock'}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </p>
        <button className="add-button" disabled={!inStock}
          type="button"
          onClick={() => onAddToCart(product)}> {/* 클릭할 때만 onAddToCart(product) 실행 */}
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </article>
 );
            
}