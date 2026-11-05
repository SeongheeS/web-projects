// 상품명 & 가격 직접 지정
/* export default function ProductCard() {
  const title = '무선 헤드폰';
  const price = 59000;
//*/


export default function ProductCard({ title, price, image }) {

  return (
    <article className="product-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p className="price">${price.toFixed(2)}</p>
      {/* 원화 표시: <p className="price">{price.toLocaleString()}원</p> */}
      <button type="button">Add to Cart</button>
    </article>
 );
            
}