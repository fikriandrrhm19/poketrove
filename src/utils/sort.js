export const sortPokemons = (pokemons, sortOrder) => {
    const sorted = [...pokemons];
    switch (sortOrder) {
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "id-desc":
        sorted.sort((a, b) => b.id - a.id);
        break;
      default:
        sorted.sort((a, b) => a.id - b.id);
    }
    return sorted;
  };
  