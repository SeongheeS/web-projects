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
            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul className="cart-items">
                        {items.map((item) => (
                            <li key={item.product.id}>
                                <img src={item.product.imageUrl} alt="" />
                                <div>
                                    <h3>{item.product.title}</h3>
                                    <p>Quantity: {item.quantity}</p>
                                    <strong>
                                        ${(item.product.price * item.quantity).toLocaleString('en-US')} {/* {...(ko-KR)}원 */}
                                    </strong>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p>Total: ${total.toFixed(2)}</p> {/* 전체 합계는 App에서 계산한 total */}
                    {/* '원': {total.toLocaleString()}원} */}
                </>
            )}
        </aside>
    );
}