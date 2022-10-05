import {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import Toggle from '../components/Toggle';
import { IMDBMovie } from '../model/movie';
import { Link } from 'react-router-dom';
import { useFavouriteMovieContext } from '../lib/useFavouriteMovie';

const Detail: FunctionComponent = () => {
  const params = useParams();
  const favouriteMovieContext = useFavouriteMovieContext();
  const [movieData, setMovieData] = useState<IMDBMovie>();

  useEffect(() => {
    const fetchMovieData = (imdbID: string | undefined) => {
      fetch(`https://www.omdbapi.com/?apikey=1a993ee0&i=${imdbID}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.response !== false) {
            setMovieData(data);
          } else {
            throw new Error(data?.Error);
          }
        });
    };
    fetchMovieData(params.movieId);
  }, [params, setMovieData]);

  const favouriteMovie = useMemo(() => {
    const favourites = favouriteMovieContext.favourites;
    const favourite = favourites.find((item) => item.imdbID === params.movieId);
    return favourite !== undefined;
  }, [favouriteMovieContext]);

  const toggleFavouriteCallback = useCallback(() => {
    if (movieData) {
      favouriteMovieContext.updateFavouriteItem(movieData);
    }
  }, [movieData]);

  return (
    <div className="bg-white">
      {movieData && (
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            <div>
              <div className="w-full aspect-w-1 aspect-h-1">
                <img className="w-full h-full object-center object-cover sm:rounded-lg" />
              </div>
            </div>
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <Toggle
                toggleFavourite={toggleFavouriteCallback}
                isFavourite={favouriteMovie}
              />
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {movieData.Title}
              </h1>
              <div className="mt-3">
                <p className="text-3xl text-gray-900">{movieData.Year}</p>
              </div>
              <div className="mt-3">
                <p className="text-xl text-gray-900">{movieData.Actors}</p>
              </div>
              <div className="mt-6">
                <h3 className="sr-only">{movieData.Director}</h3>
                <div className="text-base text-gray-700 space-y-6">
                  <p>{movieData.Plot}</p>
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <Link to={'/'}>Back</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
