import { FunctionComponent } from 'react';
import MovieCard from '../components/MovieCard';
import { useFavouriteMovieContext } from '../lib/useFavouriteMovie';
import { IMDBMovie } from '../model/movie';

const Favorites: FunctionComponent = () => {
  const { favourites } = useFavouriteMovieContext();
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {favourites?.map((favourite: IMDBMovie) => {
        return (
          <MovieCard
            title={favourite.Title}
            id={favourite.imdbID}
            year={favourite.Year}
            key={favourite.imdbID}
            isFavourite
          />
        );
      })}
    </ul>
  );
};

export default Favorites;
