import { useState } from "react";


type HeaderProps = {
    onSearch: (keyword: string) => void;
}


export default function Header({ onSearch }: HeaderProps) {
    const [query, setQuery] = useState('');

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
            <span>Cart 0</span>

        </header>
  );

}