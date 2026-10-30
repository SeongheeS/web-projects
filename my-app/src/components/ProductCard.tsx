export default function ProductCard() {

  const title = '무선 헤드폰';

  const price = 59000;

  return (

    <article className="product-card">

        <img src="./public/headphones1.webp" alt={title} />

        <h2>{title}</h2>

        <p className="price">{price}원</p>

        <button type="button">장바구니 담기</button>

    </article>

 );
            
}