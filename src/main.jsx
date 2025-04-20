import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/fonts/sans.css';
import './styles/global.css';
import { ThemeProvider } from './context/ThemeContext';
import { PokemonFilterProvider } from './context/PokemonFilterContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <PokemonFilterProvider>
        <App />
      </PokemonFilterProvider>
    </ThemeProvider>
  </StrictMode>
);
