export default function Header() {

    return (
        <header className="site-header">

            <strong className="logo">amazon</strong>
            <div className="search">

                <input
                    aria-label="Search Amazon"
                    placeholder="Search Amazon"
                />
                <button type="button">Search</button>

            </div>
            <span>Cart 0</span>

        </header>
  );

}