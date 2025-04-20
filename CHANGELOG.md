# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),  
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] - 2025-04-20
### Added
- **Pokémon Type Filter**: Users can now filter the Pokémon list by type.
- **Client-side Caching**: Cached previously fetched Pokémon data to reduce redundant API calls.
- **Global State Management**: Introduced `PokemonFilterContext` for managing filter state across components.

### Changed
- Minor refactor and cleanup of component structure to support caching and context-based filtering.

---

## [1.0.0] - 2025-04-10
### Added
- Initial release of PokéTrove!
- Search Pokémon by name from the PokéAPI.
- Pokémon Detail Page with image, types, abilities, and more.
- Clean UI built with React and Tailwind CSS.
- Navigation powered by React Router.
