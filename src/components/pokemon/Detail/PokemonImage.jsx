const PokemonImage = ({ imageUrl, name, spriteUrl }) => (
    <>
      <img
        src={imageUrl}
        alt={name}
        className="-mt-4 w-full max-w-xs mx-auto"
      />
      <div className="relative">
        <h1 className="text-2xl sm:text-4xl font-bold capitalize pr-32">{name}</h1>
        <img
          src={spriteUrl}
          alt={name}
          className="w-36 h-36 absolute top-0 right-0 -translate-y-14 translate-x-10"
        />
      </div>
    </>
  );
  
  export default PokemonImage;
  