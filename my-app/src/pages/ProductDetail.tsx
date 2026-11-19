import { Link, useParams } from 'react-router'
import { products } from '../data/products'
import tupe { Product } from '../data/products'

tupe ProductDetailProps = {
    onAddToCart: (product: Product) => void;
};

export default function ProductDetail({
    onAddToCart,
}: ProductDetailProps) {
    const { productId } = useParams();
    const product = products.find(
        (item) => String(item.id) === productId
    );
    if (!product){
        return (
            <main className="page">
                <h1>Product not found.</h1>
                <Link to="/">Back to Product List</Link>
            </main>
        );
    }
    // 아래에는 product가 있는 경우에만 진행
    return (
        <main className="page">
            <Link to="/">Back to Product List</Link>
            <article className="product-detail">
                <img className="detail-image"
                    src={product.imageUrl} alt={product.title} />
                <div className="detail-content">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p className="price">
                        ${product.price.toLocaleString()}
                    </p>
                    {/* 다음 Step의 Add to Cart 버튼 추가 */}
                    <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
                    <button
                        className="add-button"
                        type="button"
                        disabled={!product.inStock}
                        onClick={() => onAddToCart(product)}
                    >
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </button>
                </div>
            </article>
        </main>
    );
}