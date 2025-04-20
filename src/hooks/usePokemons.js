import { useEffect, useState } from "react";

const POKEMON_LIMIT = 1000;
const STORAGE_KEY = `pokemons-basic-cache-${POKEMON_LIMIT}`;

const usePokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);

      // Check cache and validate its length
      const cached = localStorage.getItem(STORAGE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed.length === POKEMON_LIMIT) {
          setPokemons(parsed);
          setLoading(false);
          return;
        } else {
          // if the amount is incorrect, clear the cache
          localStorage.removeItem(STORAGE_KEY);
        }
      }

      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${POKEMON_LIMIT}`);
        const data = await res.json();

        const simplified = await Promise.all(
          data.results.map(async (pokemon, index) => {
            const res = await fetch(pokemon.url);
            const detail = await res.json();
        
            return {
              id: index + 1,
              name: pokemon.name,
              url: pokemon.url,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,
              types: detail.types.map((t) => t.type.name),
            };
          })
        );
        

        setPokemons(simplified);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(simplified));
      } catch (err) {
        console.error("Error fetching Pokémon list:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  return { pokemons, loading };
};

export default usePokemons;
