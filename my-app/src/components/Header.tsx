import { useState } from 'react';
import type { CartItem } from '../types/cart';
import CartPanel from './CartPanel';


type HeaderProps = {
    onSearch: (keyword: string) => void;
    cart: CartItem[];S
    cartCount: number;
    cartTotal: number;
    
}


export default function Header({ onSearch, cart, cartCount, cartTotal }: HeaderProps) {
    const [query, setQuery] = useState('');
    const [isCartOpen, setIsCartOpen] = useState(false); // 처음엔 장바구니 닫혀 있음

    return (
        <header className="site-header">

            <strong className="logo">amazon</strong>
            <form className="search" onSubmit={(event) => {
                event.preventDefault();
                onSearch(query.trim()); // .trim() <- 검색어 앞뒤 공백 제거
            }}>

                <input
                    aria-label="Search Amazon"
                    placeholder="Search Amazon"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <button type="submit">Search</button>

            </form>

            <div className="cart-area">
                <button type="button" className="cart-toggle"
                    aria-expanded={isCartOpen}
                    aria-controls="cart-panel"
                    onClick={() => setIsCartOpen((prev) => !prev)}>
                    Cart <span>{cartCount}</span>
                </button>
                {isCartOpen &&
                    <CartPanel items={cart} total={cartTotal} />
                }
            </div>

        </header>
  );

}