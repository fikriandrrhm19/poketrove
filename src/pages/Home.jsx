import { useState } from "react";
import Header from "../components/home/Header";
import Container from "../components/common/Container";
import usePokemons from "../hooks/usePokemons";
import { sortPokemons } from "../utils/sort";
import PokemonGrid from "../components/home/PokemonGrid";
import Pagination from "../components/home/Pagination";
import ViewModeToggle from "../components/home/ViewModeToggle";
import ScrollToTopButton from "../components/common/ScrollToTopButton";

import { usePokemonFilter } from "../context/PokemonFilterContext";

const Home = () => {
  const { pokemons, loading } = usePokemons();
  const { filterType } = usePokemonFilter();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("id-asc");
  const [mobileViewMode, setMobileViewMode] = useState("single");

  const pokemonsPerPage = 16;

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
    setCurrentPage(1);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const filtered = pokemons.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm);
    const matchesType =
  filterType === "all" ||
  (Array.isArray(p.types) && p.types.map((t) => {
    const typeName = typeof t === "string" ? t : t.type.name;
    return typeName.toLowerCase();
  }).includes(filterType));
    return matchesSearch && matchesType;
  });

  const sorted = sortPokemons(filtered, sortOrder);

  const indexOfLast = currentPage * pokemonsPerPage;
  const indexOfFirst = indexOfLast - pokemonsPerPage;
  const currentPokemons = sorted.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sorted.length / pokemonsPerPage);

  return (
    <div className="min-h-screen">
      <Header onSearch={handleSearch} onSortChange={handleSortChange}>
        <ViewModeToggle
          mobileViewMode={mobileViewMode}
          setMobileViewMode={setMobileViewMode}
        />
      </Header>

      <section className="p-4">
        <Container>
          <PokemonGrid
            loading={loading}
            pokemons={currentPokemons}
            pokemonsPerPage={pokemonsPerPage}
            viewMode={mobileViewMode}
          />
          {!loading && (
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          )}
        </Container>
      </section>
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
