import { useState } from "react";



export default function Header() {
    const [query, setQuery] = useState('');

    return (
        <header className="site-header">

            <strong className="logo">amazon</strong>
            <div className="search">

                <input
                    aria-label="Search Amazon"
                    placeholder="Search Amazon"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <button type="button">Search</button>

            </div>
            <span>Cart 0</span>

        </header>
  );

}