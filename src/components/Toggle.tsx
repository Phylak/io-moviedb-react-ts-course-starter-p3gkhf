import { FunctionComponent, useState } from 'react';
import clsx from 'clsx';

interface ToggleProps {
  toggleFavourite: () => void;
  isFavourite: boolean;
}

const Toggle: FunctionComponent<ToggleProps> = ({
  toggleFavourite,
  isFavourite,
}) => {
  return (
    <div className="flex flex-row-reverse">
      <button
        type="button"
        className={clsx(
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
          isFavourite ? 'bg-green-600' : 'bg-gray-200'
        )}
        role="switch"
        aria-checked="false"
        onClick={toggleFavourite}
      >
        <span
          aria-hidden="true"
          className={clsx(
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
            isFavourite ? 'translate-x-5' : 'translate-x-0'
          )}
        ></span>
      </button>
      <b>Favorite: </b>
    </div>
  );
};

export default Toggle;
