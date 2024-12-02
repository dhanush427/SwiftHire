import React, { useState } from "react";
import "./search.css";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (onSearch) onSearch(query);
        setQuery(""); // Clear input after search
    };

    return (
        <div className="search-bar-container">
            <input
                type="text"
                className="search-bar-input"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className="search-bar-button" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
