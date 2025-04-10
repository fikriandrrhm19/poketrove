import { useState } from "react";
import Header from "../components/home/Header";
import Container from "../components/common/Container";
import usePokemons from "../hooks/usePokemons";
import { sortPokemons } from "../utils/sort";
import PokemonGrid from "../components/home/PokemonGrid";
import Pagination from "../components/home/Pagination";
import ViewModeToggle from "../components/home/ViewModeToggle";
import ScrollToTopButton from "../components/common/ScrollToTopButton";

const Home = () => {
  const { pokemons, loading } = usePokemons();
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

  const filtered = pokemons.filter(p =>
    p.name.toLowerCase().includes(searchTerm)
  );
  const sorted = sortPokemons(filtered, sortOrder);

  const indexOfLast = currentPage * pokemonsPerPage;
  const indexOfFirst = indexOfLast - pokemonsPerPage;
  const currentPokemons = sorted.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sorted.length / pokemonsPerPage);

  return (
    <div className="min-h-screen bg-[#252A3E]">
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
