import './index.css';
import React, { useState } from "react";
import { Search } from 'lucide-react';

const Header = ({ onSearch, onSortChange, children }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [warning, setWarning] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;

    if (value.length <= 12) {
      setSearchValue(value);
      onSearch(value);
      setWarning('');
    } else {
      setWarning("Oops! 12 letters max!");
    }
  };

  return (
    <header className="header-container">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-between">
            <a href="/" className="app-title">Pokétrove</a>

            <button
              className="sm:hidden ml-auto text-white p-2"
              onClick={() => setShowSearch(!showSearch)}
            >
              <Search size={20} />
            </button>
          </div>

          {(showSearch || typeof window !== "undefined" && window.innerWidth >= 640) && (
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
              <div className="relative flex flex-col w-full sm:w-auto">
                <input
                  type="text"
                  value={searchValue}
                  placeholder="Search Pokémon..."
                  onChange={handleSearchChange}
                  className="input-search"
                />
                {warning && (
                  <span key={warning} className="warning-message animate-shake">
                  ⚠️ {warning}
                </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <select
                  onChange={(e) => onSortChange(e.target.value)}
                  className="select-sort"
                >
                  <option value="id-asc">Sort by ID: Lowest First</option>
                  <option value="id-desc">Sort by ID: Highest First</option>
                  <option value="name-asc">Sort by Name: A to Z</option>
                  <option value="name-desc">Sort by Name: Z to A</option>
                </select>

                <div className="flex sm:hidden rounded-lg overflow-hidden border border-gray-300 bg-gray-800">
                  {children}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
