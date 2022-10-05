import { FunctionComponent } from 'react';
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import { useFavouriteMovieContext } from '../lib/useFavouriteMovie';

const Edit: FunctionComponent = () => {
  const params = useParams();
  const { favourites, editMovie } = useFavouriteMovieContext();
  const favourite = favourites.find(
    (favourite) => favourite.imdbID === params.movieId
  );

  const formik = useFormik({
    initialValues: {
      Title: favourite?.Title,
      Year: favourite?.Year,
      Actors: favourite?.Actors,
    },
    onSubmit: (values) => {
      if (favourite) {
        favourite.Title = values.Title || '';
        favourite.Year = values.Year || '';
        favourite.Actors = values.Actors || '';
      }
    },
  });

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <div>
            <div className="w-full aspect-w-1 aspect-h-1">
              <img className="w-full h-full object-center object-cover sm:rounded-lg" />
            </div>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <div className="mt-1">
                  <input
                    name="Title"
                    type="text"
                    className="shadow-sm p-2 block w-full sm:text-sm border-gray-300 rounded-md"
                    onChange={formik.handleChange}
                    value={formik.values.Title}
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700">
                  Year
                </label>
                <div className="mt-1">
                  <input
                    name="Year"
                    type="text"
                    className="shadow-sm p-2 block w-full sm:text-sm border-gray-300 rounded-md"
                    onChange={formik.handleChange}
                    value={formik.values.Year}
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700">
                  Actors
                </label>
                <div className="mt-1">
                  <input
                    name="Actors"
                    type="text"
                    className="shadow-sm p-2 block w-full sm:text-sm border-gray-300 rounded-md"
                    onChange={formik.handleChange}
                    value={formik.values.Actors}
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  className="text-sm text-blue-500 hover:text-black"
                  type="submit"
                >
                  Save favorite
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
