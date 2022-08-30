import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { compareText } from '../utils/arrayUtils';

interface SearchBarProps<T> {
  search?: { items: Array<T> | undefined; setItems: Dispatch<SetStateAction<Array<T> | undefined>> };
  buttonLabel?: string;
  placeholderText?: string;
  originalData?: T[] | undefined;
  onChange?: (value: string) => void;
  isSorting?: boolean;
}

function SearchBar<T>(props: SearchBarProps<T>) {
  const { buttonLabel = 'Search', placeholderText = 'Search', onChange, search, originalData, isSorting } = props;
  const [sorted, setSorted] = useState(false);
  const [unSorted, setUnSorted] = useState(originalData);

  const handleChange = (e: { target: { value: string } }) => {
    handleSearch(e.target.value);
    onChange && onChange(e.target.value);
  };

  const handleSearch = (value: string) => {
    if (value.startsWith('/')) {
      const explodeWithSpace = value?.split(' ');

      if (Array.isArray(explodeWithSpace) && explodeWithSpace.length > 1) {
        explodeWithSpace.map((_item) => {
          const explodeWithTwoPoint = _item.split(':');

          if (Array.isArray(explodeWithTwoPoint) && explodeWithTwoPoint.length > 1) {
            search?.setItems(
              originalData?.filter((__item) => {
                const itemKey = explodeWithTwoPoint[0].substring(1);
                const itemValue = explodeWithTwoPoint[1];

                //eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                return __item[itemKey]?.toLowerCase() === itemValue.toLowerCase();
              })
            );
          }

          if (!_item.includes(':')) {
            search?.setItems((prev) =>
              prev?.filter((__item: T) => JSON.stringify(__item).toLowerCase().includes(_item.toLowerCase()))
            );
          }
        });
      }

      return;
    }

    search?.setItems(
      originalData?.filter((item) => JSON.stringify(item).toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    );
  };

  useEffect(() => {
    sorted
      ? search?.setItems((prev) => {
          setUnSorted(prev);

          return [...(prev || [])]?.sort(compareText);
        })
      : search?.setItems(unSorted);
  }, [sorted]);

  return (
    <div className={'flex justify-center'}>
      <div className={'mb-3 w-full'}>
        <div className={'input-group relative flex flex-row items-stretch w-full mb-4'}>
          <input
            type="search"
            onChange={handleChange}
            className={
              'flex flex-1 form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-slate-800 bg-clip-padding border border-solid border-slate-800 rounded transition ease-in-out m-0 focus:border-blue-600 focus:outline-none focus:text-slate-100'
            }
            placeholder={placeholderText}
            aria-label={buttonLabel}
            aria-describedby="button-addon3"
          />
          {isSorting && (
            <button
              onClick={() => setSorted(!sorted)}
              className={`btn inline-block ml-2 px-6 py-2 text-slate-300 font-medium text-xs leading-tight uppercase rounded hover:bg-slate-300 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out ${
                sorted && 'bg-opacity-5 bg-slate-300'
              }`}
              type="button"
            >
              Sort by Name
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export { SearchBar };
