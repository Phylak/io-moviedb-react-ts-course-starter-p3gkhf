import { FunctionComponent } from 'react';
import MovieCard from '../components/MovieCard';
import { useSearchContext } from '../lib/useSearch';

const Home: FunctionComponent = () => {
  const searchContext = useSearchContext();
  const movieItems = searchContext.movieItems;

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {movieItems?.map((item) => {
        return (
          <MovieCard
            title={item.Title}
            year={item.Year}
            id={item.imdbID}
            key={item.imdbID}
          />
        );
      })}
    </ul>
  );
};

export default Home;
