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
    // 아래에 다음 두 Step 코드 작성
}