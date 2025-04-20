const PokemonHeader = ({ id }) => (
  <div className="flex justify-between items-center -mt-4 -mb-12">
    <span className="text-[#8f9bb3] dark:text-[#97A0CC] text-xl">
      #{String(id).padStart(4, "0")}
    </span>
    <img src="/image/pokemon_logo.png" alt="Logo" className="w-32 h-auto" />
  </div>
);

export default PokemonHeader;
