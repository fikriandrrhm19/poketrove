const PokemonInfo = ({ stats, name }) => (
  <div className="rounded-xl p-5 mt-3 bg-[#F0F3FF] dark:bg-[#05091B]">
    <h3 className="text-xl text-[#8f9bb3] dark:text-[#97A0CC] mb-1">Health</h3>

    <div className="relative w-full h-2 rounded-full bg-[#DDE5F7] dark:bg-[#3D4466]">
      <div
        className="absolute h-2 rounded-full"
        style={{
          width: `${(stats[0].base_stat / 255) * 100}%`,
          background: "linear-gradient(90deg, #2AE3B7, #6CF0A1)",
        }}
      />
    </div>

    <p className="mt-1 text-4xl font-bold mb-4 flex items-center gap-2 text-[#2e3a59] dark:text-[#F0F3FF]">
      {stats[0].base_stat}
      <span className="text-xl font-thin flex items-center text-[#8f9bb3] dark:text-[#97A0CC]">from 255</span>
    </p>

    <div className="my-4 h-0.5 rounded-full bg-[#DDE5F7] dark:bg-[#3D4466]" />

    <div className="flex flex-row sm:justify-start sm:gap-8 text-left">
      <div className="mb-3 sm:mb-0">
        <h4 className="text-xl text-[#8f9bb3] dark:text-[#97A0CC]">Attack</h4>
        <p className="text-4xl font-bold text-[#2e3a59] dark:text-[#F0F3FF]">{stats[1].base_stat}</p>
      </div>
      <div className="ml-20 sm:ml-auto sm:mr-10">
        <h4 className="text-xl text-[#8f9bb3] dark:text-[#97A0CC]">Defense</h4>
        <p className="text-4xl font-bold text-[#2e3a59] dark:text-[#F0F3FF]">{stats[2].base_stat}</p>
      </div>
    </div>
  </div>
);

export default PokemonInfo;
