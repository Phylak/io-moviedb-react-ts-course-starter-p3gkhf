import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { SearchContextProvider } from './lib/useSearch';
import { BrowserRouter } from 'react-router-dom';
import { FavouriteMovieContextProvider } from './lib/useFavouriteMovie';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <SearchContextProvider>
        <FavouriteMovieContextProvider>
          <App />
        </FavouriteMovieContextProvider>
      </SearchContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
