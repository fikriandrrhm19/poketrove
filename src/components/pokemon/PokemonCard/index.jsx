import './index.css';
import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemon, viewMode = "single" }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className="card-wrapper">
      <div
  className={`pokemon-card cursor-pointer hover:scale-105 transition-transform ${
    viewMode === "double" ? "text-center" : "text-left"
  } ${viewMode === "single" ? "single" : ""}`}
>

        <img
          src={pokemon.sprites?.other["official-artwork"]?.front_default}
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
            {pokemon.types.map((typeInfo) => (
              <span
                key={typeInfo.type.name}
                className={`type-badge type-${typeInfo.type.name}`}
              >
                {typeInfo.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};



export default PokemonCard;
