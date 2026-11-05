import "./App.css";
import Header from './components/Header';
import ProductCard from "./components/ProductCard";


/*
function ProductCard() {
    const title = '무선 헤드폰';
    const price = 59000;

    return (
    <article className="product-card">
    <img src="/headphones1.webp" alt={title} />
    <h2>{title}</h2>
    <p className="price">{price}원</p>
    <button type="button">장바구니 담기</button>
    </article>
    );

}
*/

export default function App() {

    return (
        <>
            <Header />
            <main className="page">
                <h1>Keep shopping for</h1>
                <div className="product-grid">
                    <ProductCard
                        title="Wireless Headphones"
                        price={153.33} // 원화 표시: {59000} -> 59,000원
                        image="/headphones.jpg"
                    />
                    <ProductCard
                        title="Wireless Keyboard"
                        price={79.99}
                        image="/keyboard.jpg"
                    />
                </div>
            </main>
        </>
    );

}