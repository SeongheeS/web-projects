import "./App.css";
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import { products } from './data/products';
import { useState } from 'react';
import type { CartItem } from './types/cart';
import type { Product } from './data/products';


export default function App() {
    const [searchTerm, setSearchTerm] = useState('');

    const visibleProducts = products.filter(
        (product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) // 대소문자 구분 없이 검색하기 위함
    );

    const [cart, setCart] = useState<CartItem[]>([]); // [] <- 처음에는 장바구니 비어 있음

    function handleAddToCart(product: Product) {
        if (!product.inStock) return;
        setCart((prev) => {
            const existingItem = prev.find(
                (item) => item.product.id === product.id
            );
            if (existingItem) {
                return prev.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { product, quantity: 1 }];
        });
    }

    const cartCount = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const cartTotal = cart.reduce(
        (sum, item) =>
            sum + item.product.price * item.quantity,
        0
    );

    return (
        <>
            <Header
                onSearch={setSearchTerm}
                cart={cart}
                cartCount={cartCount}
                cartTotal={cartTotal}
            />
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
                                product={product}
                                onAddToCart={handleAddToCart}
                            />
                        ))}
                    </section>
                )}
            </main>
        </>
    );

}