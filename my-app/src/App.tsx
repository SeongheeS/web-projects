import "./App.css";
import Header from './components/Header';
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
import { useState } from "react";


export default function App() {
    const [searchTerm, setSearchTerm] = useState('');

    const visibleProducts = products.filter(
        (product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) // 대소문자 구분 없이 검색하기 위함
    );

    return (
        <>
            <Header onSearch={setSearchTerm} />
            <main className="page">
                <h1>Keep shopping for</h1>
                <div className="product-grid">
                    {visibleProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            inStock={product.inStock}
                        />
                    ))}
                </div>
            </main>
        </>
    );

}