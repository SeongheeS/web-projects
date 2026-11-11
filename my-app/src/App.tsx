import "./App.css";
import Header from './components/Header';
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
import { useState } from "react";
import type { CartItem } from "./types/cart";
import type { Product } from "./data/products";


export default function App() {
    const [searchTerm, setSearchTerm] = useState('');

    const visibleProducts = products.filter(
        (product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) // 대소문자 구분 없이 검색하기 위함
    );

    const [cart, setCart] = useState<CartItem[]>([]); // [] <- 처음에는 장바구니 비어 있음

    return (
        <>
            <Header onSearch={setSearchTerm} />
            <main className="page">
                <h1>Keep shopping for</h1>

                {visibleProducts.length === 0 ? (
                    <p className="empty-message">
                        No products found. {/* 상품이 없으면 안내 문구 표시 */}
                    </p>
                ) : (
                    <section className="product-grid">
                        {visibleProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                title={product.title}
                                price={product.price}
                                imageUrl={product.imageUrl}
                                inStock={product.inStock}
                            />
                        ))}
                    </section>
                )}
            </main>
        </>
    );

}