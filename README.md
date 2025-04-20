# PokéTrove

<p align="left">
  <img src="https://img.shields.io/badge/version-1.1.0-blue" />
  <img src="https://img.shields.io/badge/license-MIT-green" />
  <img src="https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4.1-38B2AC?logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-6.2.0-646CFF?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Demo-ptrove.fyz.my.id-blue?logo=vercel&logoColor=white" />
</p>


**PokéTrove** is a modern and responsive web application built using **React**, **Tailwind CSS**, and **Vite**.  This app lets users browse, search, and explore Pokémon data from the [PokéAPI](https://pokeapi.co/) with a smooth and engaging user experience.

Visit the live site here: [https://ptrove.fyz.my.id](https://ptrove.fyz.my.id)

<p align="center">
  <img src="https://raw.githubusercontent.com/fikriandrrhm19/poketrove/main/public/image/pokemon_logo.png" alt="Pokémon Logo" width="280"/>
</p>

## Features

- ⚡ **Fast & modern UI** powered by Vite + Tailwind CSS  
- 🌙 **Dark & light mode** with persistence via localStorage  
- 🔍 **Real-time search** and dynamic Pokémon filtering  
- 📄 **Pagination** with smooth navigation  
- 📱 **Responsive view**: Grid/List toggle for all screen sizes  
- 🧠 **Reusable components & hooks** for cleaner structure  
- ⬆️ **Animated scroll-to-top** button  
- 🔒 **State management** via Context API  

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
├── public/             # Static assets (logo, loading gif, etc.) 
├── src/ 
│ ├── assets/           # Fonts and image assets 
│ │ └── fonts/ 
│ ├── components/       # Reusable UI components 
│ │ ├── common/         # Generic components (e.g., Container, ScrollToTopButton) 
│ │ ├── home/           # Home page components (Header, Grid, Pagination, Toggle) 
│ │ └── pokemon/        # Detail page & card components 
│ ├── context/          # Global state management (e.g., filters, theme) 
│ ├── hooks/            # Custom hooks (e.g., usePokemons) 
│ ├── pages/            # Page components (Home, Detail) 
│ ├── routes/           # App routing (React Router) 
│ ├── styles/           # Global Tailwind config & custom styles 
│ ├── theme/            # Theme provider (dark/light mode logic) 
│ └── utils/            # Utility functions (e.g., sort logic) 
├── index.html          # HTML template 
├── package.json        # Project dependencies and scripts 
├── tailwind.config.js  # Tailwind CSS configuration 
├── vite.config.js      # Vite build configuration
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

Open http://localhost:5173 in your browser to see the app and explore locally.

### Build for Production
```
npm run build
```

## Screenshots

<p align="center"> 
    <img src="https://github.com/user-attachments/assets/21dccb1d-d238-4a34-bb6c-8be69bc88bf1" width="720" /> 
</p> 
<p align="center"> 
    <img src="https://github.com/user-attachments/assets/75d07372-98cf-47af-b08a-bc22a9e820e7" width="720" /> 
</p> 
<p align="center"> 
    <img src="https://github.com/user-attachments/assets/8f61cb3a-34df-4e45-8364-e218fc0080f2" width="720" /> 
</p> 
<p align="center">
    <img src="https://github.com/user-attachments/assets/8cdf46c6-39c9-4999-b5ab-5fb7cab9ce3d" width="720" />
</p>

## Changelog

See the full changelog in [CHANGELOG.md](./CHANGELOG.md)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Credits

- Pokémon data provided by [PokéAPI](https://pokeapi.co/)
- Fonts: [DM Sans](https://fonts.google.com/specimen/DM+Sans)  
- Icons: [Lucide Icons](https://lucide.dev/)

---
© 2025 Fikri Andra Irham
All rights reserved.
