# PokéTrove

<p align="left">
  <img src="https://img.shields.io/badge/version-1.0.0-blue" />
  <img src="https://img.shields.io/badge/license-MIT-green" />
  <img src="https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4.1-38B2AC?logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-6.2.0-646CFF?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Demo-pmon.fyz.my.id-blue?logo=vercel&logoColor=white" />
</p>


**PokéTrove** is a modern and responsive web application built using **React**, **Tailwind CSS**, and **Vite**.  This app lets users browse, search, and explore Pokémon data from the [PokéAPI](https://pokeapi.co/) with a smooth and engaging user experience.

Visit the live site here: [https://pmon.fyz.my.id](https://pmon.fyz.my.id)

<p align="center">
  <img src="https://raw.githubusercontent.com/fikriandrrhm19/poketrove/main/public/image/pokemon_logo.png" alt="Pokémon Logo" width="280"/>
</p>

## Features

- ⚡ Fast and modern UI powered by Vite and Tailwind CSS  
- 📱 Responsive grid and list view toggle for Pokémon display  
- 🔍 Real-time search filtering  
- 📄 Pagination for easy browsing  
- 🧭 Pokémon detail page with image, types, and stats  
- ⬆️ Scroll to top button with animated zoom-out effect  
- 🧠 Reusable components and hooks  

## Technologies Used

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [PokéAPI](https://pokeapi.co/)
- [Lucide Icons](https://lucide.dev/)
- [PostCSS](https://postcss.org/)


## Project Structure
```
poketrove/ 
├── public/              # Static assets served directly (e.g., logo, loading GIF) 
├── src/ 
│   ├── assets/          # Fonts and other static resources used in the app 
│   ├── components/      # Reusable UI components (e.g., cards, header, detail views) 
│   ├── hooks/           # Custom React hooks for fetching and managing data (e.g., usePokemons) 
│   ├── pages/           # Page-level components for routing (e.g., Home, Detail) 
│   ├── routes/          # Centralized routing configuration using React Router 
│   ├── styles/          # Global styles and custom fonts (via Tailwind + CSS) 
│   └── utils/           # Utility functions (e.g., sorting logic) 
├── index.html           # Main HTML template loaded by Vite 
├── tailwind.config.js   # Tailwind CSS configuration file 
├── vite.config.js       # Vite build tool configuration
```


## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation

```
git clone https://github.com/fikriandrrhm19/poketrove.git
cd poketrove
npm install
```

### Start Development Server
```
npm run dev
```

Open http://localhost:5173 in your browser to see the app.

### Build for Production
```
npm run build
```

## Screenshots

<p align="center"> 
    <img src="https://github.com/user-attachments/assets/1f59bb1f-1c6e-48b6-81a6-ae32e9c8e965" width="720" /> 
</p> 
<p align="center">
    <img src="https://github.com/user-attachments/assets/818062c5-1548-40e5-b7aa-e197fc3bf740" width="720" />
</p>

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Credits

- Pokémon data provided by [PokéAPI](https://pokeapi.co/)
- Fonts: [DM Sans](https://fonts.google.com/specimen/DM+Sans)  
- Icons: [Lucide Icons](https://lucide.dev/)

---
© 2025 Fikri Andra Irham
All rights reserved.
