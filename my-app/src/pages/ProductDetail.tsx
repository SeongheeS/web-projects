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
                <Link to="/">Back to Products List</Link>
            </main>
        );
    }
    // 아래에는 product가 있는 경우에만 진행
    // 다음 Step의 상세화면 return 작성
}