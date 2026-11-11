import type { CartItem } from '../types/cart';


type CartPanelProps = {
    items: CartItem[];
    total: number;
}

export default function CartPanel(
    { items, total,
}: CartPanelProps) {
    return (
        <aside id="cart-panel" className="cart-panel"> {/* aside의 id는 버튼의 aria-controls와 같음 */}
            <h2>Cart</h2>
            {/* 다음 장의 내용을 여기에 넣습니다. */}
        </aside>
    );
}