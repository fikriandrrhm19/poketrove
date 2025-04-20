import './index.css';
import React, { useState, useEffect } from "react";
import { Search, Sun, Moon } from 'lucide-react';
import { usePokemonFilter } from "../../../context/PokemonFilterContext";
import { useTheme } from "../../../context/ThemeContext";

const types = ["all", "fire", "water", "grass", "electric", "normal", "fighting", "psychic"];

const Header = ({ onSearch, onSortChange, children }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [warning, setWarning] = useState('');
  const { filterType, setFilterType } = usePokemonFilter();

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

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

  const isWideScreen = typeof window !== "undefined" && window.innerWidth >= 640;

  return (
    <header className="header-container">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-between w-full">
            <a href="/" className="app-title">PokéTrove</a>

            <div className="flex items-center gap-2">
              <button
                className="sm:hidden text-white p-2"
                onClick={() => setShowSearch(!showSearch)}
              >
                <Search size={20} />
              </button>
              <button
                onClick={toggleTheme}
                className="sm:hidden text-white dark:text-yellow-300 hover:scale-110 transform transition"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {(showSearch || isWideScreen) && (
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 w-full sm:w-auto sm:ml-auto">
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
          
              <div className="flex sm:hidden flex-row items-center gap-2 w-full">
                <div className="flex-1">
                  <select
                    onChange={(e) => onSortChange(e.target.value)}
                    className="select-sort w-full"
                  >
                    <option value="id-asc">ID: ↑</option>
                    <option value="id-desc">ID: ↓</option>
                    <option value="name-asc">Name: A→Z</option>
                    <option value="name-desc">Name: Z→A</option>
                  </select>
                </div>
            
                <div className="flex-1">
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="select-sort w-full"
                  >
                    {types.map((type) => (
                      <option key={type} value={type}>
                        {type[0].toUpperCase() + type.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
            
                <div className="switch-display-mobile">
                  {children}
                </div>
              </div>
            
              <div className="hidden sm:flex items-center gap-4">
                <select
                  onChange={(e) => onSortChange(e.target.value)}
                  className="select-sort"
                >
                  <option value="id-asc">Sort by ID: Lowest First</option>
                  <option value="id-desc">Sort by ID: Highest First</option>
                  <option value="name-asc">Sort by Name: A to Z</option>
                  <option value="name-desc">Sort by Name: Z to A</option>
                </select>
            
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="select-sort"
                >
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type[0].toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
                <div className="flex items-center gap-2">
                  <button onClick={toggleTheme} className="ml-2 text-white dark:text-yellow-300">
                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
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
