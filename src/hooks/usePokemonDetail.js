import { useEffect, useState } from "react";

const usePokemonDetail = (nameOrId) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  const STORAGE_KEY = `pokemon-detail-${nameOrId}`;

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);

      const cached = localStorage.getItem(STORAGE_KEY);
      if (cached) {
        setPokemon(JSON.parse(cached));
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
        const data = await res.json();

        setPokemon(data);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      } catch (err) {
        console.error("Error fetching Pokémon detail:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [nameOrId]);

  return { pokemon, loading };
};

export default usePokemonDetail;
