import "./App.css";
import Header from './components/Header';
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";


export default function App() {

    return (
        <>
            <Header />
            <main className="page">
                <h1>Keep shopping for</h1>
                <div className="product-grid">
                    {products.map((product) => (
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