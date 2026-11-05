export default function Header() {

    return (
        <header className="site-header">

            <strong className="logo">amazon</strong>
            <div className="search">

                <input aria-label="상품 검색" placeholder="상품 검색" />
                <button type="button">검색</button>

            </div>
            <span>장바구니 0</span>

        </header>
  );

}