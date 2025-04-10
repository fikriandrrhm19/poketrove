import { useEffect, useState } from "react";

const usePokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);

      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=500");
        const data = await res.json();

        const detailedData = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return await res.json();
          })
        );

        setPokemons(detailedData);
      } catch (error) {
        console.error("Failed to fetch Pokémon:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  return { pokemons, loading };
};

export default usePokemons;
