import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import tupe { Product } from '../data/products'

type ProductListProps = {
    searchTerm: string;
    onAddToCart: (product: Product) => void;
};

export default function ProductList({
    searchTerm, onAddToCart,
}: ProductListProps) {
    const visibleProducts = products.filter(
        (product) => product.title.includes(searchTerm)
    );
    return (
        <main className="page">
            <h1>Keep shopping for</h1>
            {/* 검색 결과가 없으면 안내 문구 표시 */}
            {visibleProducts.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <section className="product-grid">
                    {/* 검색 결과를 ProductCard 컴포넌트로 표시 */}
                    {visibleProducts.map((product) => (
                        <ProductCard key={product.id}
                            product={product}
                            onAddToCart={onAddToCart} />
                    ))}
                </section>
            )}
        </main>
    );
}