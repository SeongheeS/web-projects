// 상품명 & 가격 직접 지정
/* export default function ProductCard() {
  const title = '무선 헤드폰';
  const price = 59000;
//*/

import type { Product } from "../data/products"; 

type ProductCardProps = {
  title: string;
  price: number;
  imageUrl: string;
  inStock: boolean;
};

export default function ProductCard({ title, price, imageUrl, inStock }:  ProductCardProps) {

  return (
    <article className="product-card">
      <img src={imageUrl} alt={title} />
      <div className="product-info">
        <h2>{title}</h2>
        <p className="price">${price.toLocaleString('en-US')}</p>
        {/* 원화 표시: <p className="price">{price.toLocaleString()}원</p> */}
        <p>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </p>
        <button disabled={!inStock}>
        {inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </article>
 );
            
}