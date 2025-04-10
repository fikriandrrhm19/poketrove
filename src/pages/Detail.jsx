import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BackButton from "../components/pokemon/Detail/BackButton";
import PokemonHeader from "../components/pokemon/Detail/PokemonHeader";
import PokemonImage from "../components/pokemon/Detail/PokemonImage";
import PokemonInfo from "../components/pokemon/Detail/PokemonInfo";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPokemon(data);
    };
    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#252A3E]">
        <img src="/image/pokeball.gif" alt="Loading Pokéball" className="w-12 h-12 animate-spin" />
        <p className="text-sm text-[#DDE5F7] mt-2 animate-pulse">Catching Pokémon...</p>
      </div>
    );
  }  

  return (
    <div className="min-h-screen bg-[#252A3E] text-white flex justify-center items-center px-4 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-[#1B1F2F] rounded-2xl p-6 sm:p-14 shadow-xl shadow-[#00000040]"
      >
        <BackButton onClick={() => navigate(-1)} />
        <PokemonHeader id={pokemon.id} />
        <PokemonImage
          imageUrl={pokemon.sprites.other["official-artwork"].front_default}
          name={pokemon.name}
          spriteUrl={pokemon.sprites.front_default}
        />
        <PokemonInfo stats={pokemon.stats} name={pokemon.name} />
      </motion.div>
    </div>
  );
};

export default Detail;
