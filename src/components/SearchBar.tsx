import React, { Dispatch, SetStateAction } from 'react';

interface SearchBarProps<T> {
  search?: { items: Array<T> | undefined; setItems: Dispatch<SetStateAction<Array<T> | undefined>> };
  buttonLabel?: string;
  placeholderText?: string;
  originalData?: T[] | undefined;
  onChange?: (value: string) => void;
  isSorting?: boolean;
}

function SearchBar<T>(props: SearchBarProps<T>) {
  const { buttonLabel = 'Search', placeholderText = 'Search', onChange, search, originalData } = props;

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
        </div>
      </div>
    </div>
  );
}

export { SearchBar };
