import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import tupe { Product } from '../data/products'

type PrductListProps = {
    searchTerm: string;
    onAddToCart: (product: Product) => void;
};

export default function ProductList({
    searchTerm, onAddToCart,
}: ProductListProps) {
    const visibleProducts = products.filter(
        (product) => product.title.includes(searchTerm)
    );
    // 아래에 Step 16B의 return 작성
}