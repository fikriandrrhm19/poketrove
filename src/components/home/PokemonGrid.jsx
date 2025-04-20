import PlaceholderCard from "../pokemon/PlaceholderCard";
import PokemonCard from "../pokemon/PokemonCard";
import { motion } from "framer-motion";

const PokemonGrid = ({ loading, pokemons, pokemonsPerPage, viewMode }) => {
  const gridClasses =
    viewMode === "single"
      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4";

  return loading ? (
    <>
      <div className="flex flex-col items-center justify-center h-32 gap-2">
        <img
          src="/image/pokeball.gif"
          alt="Loading Pokéball"
          className="h-12 w-12 animate-spin"
        />
        <span className="text-[#2e3a59] dark:text-[#DDE5F7] text-sm animate-pulse">
          Catching Pokémon...
        </span>
      </div>
      <main className={`grid gap-6 mt-4 ${gridClasses}`}>
        {Array.from({ length: pokemonsPerPage }).map((_, index) => (
          <PlaceholderCard key={index} />
        ))}
      </main>
    </>
  ) : (
    <main className={`grid gap-6 ${gridClasses}`}>
      {pokemons.map((pokemon, index) => (
        <motion.div
          key={pokemon.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.03, duration: 0.3 }}
        >
          <PokemonCard pokemon={pokemon} viewMode={viewMode} />
        </motion.div>
      ))}
    </main>
  );
};

export default PokemonGrid;
