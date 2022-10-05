import { useContext, createContext, useState, PropsWithChildren } from 'react';
import { IMDBMovie } from '../model/movie';

interface contextProps {
  fetchMovies: (searchValue: string) => void;
  movieItems: IMDBMovie[];
}
const SearchContext = createContext<contextProps | null>(null);

const SearchContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [movieItems, setMovieItems] = useState<IMDBMovie[]>([]);

  const fetchMovies = (searchValue: string) => {
    fetch(`https://www.omdbapi.com/?apikey=1a993ee0&s=${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        setMovieItems(data.Search);
      });
  };

  return (
    <SearchContext.Provider value={{ fetchMovies, movieItems }}>
      {children}
    </SearchContext.Provider>
  );
};
const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (context === undefined || context === null) {
    throw new Error(
      'useSearchContext must be within the SearchContextProvider'
    );
  }
  return context;
};
export { SearchContextProvider, useSearchContext };
