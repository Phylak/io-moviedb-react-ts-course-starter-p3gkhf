import {
  useContext,
  createContext,
  useState,
  PropsWithChildren,
  useCallback,
} from 'react';
import { IMDBMovie } from '../model/movie';

interface ContextProps {
  updateFavouriteItem: (item: IMDBMovie) => void;
  editMovie: (item: IMDBMovie) => void;
  favourites: IMDBMovie[];
}

const FavouriteMovieContext = createContext<ContextProps | null>(null);

const FavouriteMovieContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [favourites, setFavourites] = useState<IMDBMovie[]>([]);

  const updateFavouriteItem = useCallback(
    (movie: IMDBMovie) => {
      setFavourites((state) => {
        const favourite = state.find((favourite) => {
          return favourite.imdbID === movie.imdbID;
        });
        if (favourite === undefined) {
          return [...state, movie];
        } else {
          return state.filter((item) => item.imdbID !== movie.imdbID);
        }
      });
    },
    [favourites, setFavourites]
  );

  const editMovie = useCallback(
    (movie: IMDBMovie) => {
      setFavourites((state) => {
        const favourite = state.find((item) => item.imdbID === movie.imdbID);
      });
    },
    [favourites, setFavourites]
  );

  return (
    <FavouriteMovieContext.Provider
      value={{ favourites, updateFavouriteItem, editMovie }}
    >
      {children}
    </FavouriteMovieContext.Provider>
  );
};

const useFavouriteMovieContext = () => {
  const context = useContext(FavouriteMovieContext);
  if (context === undefined || context === null) {
    throw new Error(
      'useSearchContext must be within the SearchContextProvider'
    );
  }
  return context;
};

export { useFavouriteMovieContext, FavouriteMovieContextProvider };
