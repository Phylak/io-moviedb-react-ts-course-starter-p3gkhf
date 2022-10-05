import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  id: string;
  title: string;
  year: string;
  isFavourite?: boolean;
}

const MovieCard: FunctionComponent<MovieCardProps> = ({
  title,
  year,
  id,
  isFavourite,
}) => {
  return (
    <div className="flex flex-col">
      <Link to={`/detail/${id}`}>
        <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="flex-1 flex flex-col">
            <img className="h-48 mx-auto mt-4" />
            <div className="p-4">
              <h3 className="mt-6 text-gray-900 text-sm font-medium">
                {title}
              </h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
                <dd className="text-gray-500 text-sm">{year}</dd>
              </dl>
            </div>
          </div>
        </li>
      </Link>
      {isFavourite && (
        <div className="flex justify-between">
          <Link to={`/favorites/edit/${id}`}>Edit</Link>
          <Link to={`/favorites/delete}`}>Delete</Link>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
