import { createContext, useContext, useState } from "react";

const PokemonFilterContext = createContext();

export const usePokemonFilter = () => useContext(PokemonFilterContext);

export const PokemonFilterProvider = ({ children }) => {
  const [filterType, setFilterType] = useState("all");

  return (
    <PokemonFilterContext.Provider value={{ filterType, setFilterType }}>
      {children}
    </PokemonFilterContext.Provider>
  );
};
