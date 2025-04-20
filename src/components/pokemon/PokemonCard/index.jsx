import './index.css';
import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemon, viewMode = "single" }) => {
  console.log(pokemon.name, pokemon.types);

  return (
    <Link to={`/pokemon/${pokemon.id}`} className="card-wrapper">
      <div
  className={`pokemon-card cursor-pointer hover:scale-105 transition-transform ${
    viewMode === "double" ? "text-center" : "text-left"
  } ${viewMode === "single" ? "single" : ""}`}
>

        <img
          src={
            pokemon.sprites?.other["official-artwork"]?.front_default ||
            pokemon.image
          }
          alt={pokemon.name}
          className="pokemon-image mx-auto"
        />
        <div className="pokemon-info">
          <h2
            className={`pokemon-name ${
              viewMode === "double" ? "text-sm leading-tight" : ""
            }`}
          >
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h2>
          <div className="pokemon-types flex justify-center gap-1 mt-1">
          {Array.isArray(pokemon.types) &&
            pokemon.types.map((type) => {
              const typeName = typeof type === "string" ? type : type.type.name;
              return (
                <span key={typeName} className={`type-badge type-${typeName}`}>
                  {typeName}
                </span>
              );
          })}            
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
