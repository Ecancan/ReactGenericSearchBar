import React, { CSSProperties, Dispatch, SetStateAction } from 'react';
import { DEFAULT_CONSTANTS } from '../constants/constants';
import { SEARCH_SEPARATORS } from '../constants/seperatorConstants';
import { SearchBarContainer, SearchBarTextInput } from './searchBarStyle';

export interface SearchBarStyleProps {
  containerStyle?: CSSProperties;
  searchInputStyle?: CSSProperties;
}

export interface SearchBarProps<T> {
  search?: { items: Array<T> | undefined; setItems: Dispatch<SetStateAction<Array<T> | undefined>> };
  buttonLabel?: string;
  placeholderText?: string;
  originalData?: Array<T> | undefined;
  onChange?: (value: string) => void;
  styles?: SearchBarStyleProps;
}

function SearchBar<T>(props: SearchBarProps<T>) {
  const {
    buttonLabel = DEFAULT_CONSTANTS.SEARCH,
    placeholderText = DEFAULT_CONSTANTS.SEARCH,
    onChange,
    search,
    originalData,
    styles
  } = props;

  const handleChange = (e: { target: { value: string } }) => {
    handleSearch({ value: e.target.value });
    onChange && onChange(e.target.value);
  };

  const handleSearch = ({ value }: { value: string }) => {
    if (value.startsWith(SEARCH_SEPARATORS.SLASH)) {
      const explodeWithSpace: Array<string> = value?.split(SEARCH_SEPARATORS.SPACE);

      if (Array.isArray(explodeWithSpace) && explodeWithSpace.length > 1) {
        explodeWithSpace.map((_item) => {
          const explodeWithTwoPoint: Array<string> = _item.split(SEARCH_SEPARATORS.TWO_POINT_UP);

          if (Array.isArray(explodeWithTwoPoint) && explodeWithTwoPoint.length > 1) {
            search?.setItems(
              originalData?.filter((__item) => {
                const itemKey: string = explodeWithTwoPoint[0].substring(1);
                const itemValue: string = explodeWithTwoPoint[1];

                return __item[itemKey]?.toString().toLowerCase() === itemValue.toString().toLowerCase();
              })
            );
          }

          if (!_item.includes(SEARCH_SEPARATORS.TWO_POINT_UP)) {
            search?.setItems((prev) =>
              prev?.filter((__item: T) => JSON.stringify(__item).toLowerCase().includes(_item.toLowerCase()))
            );
          }
        });
      }

      return;
    }

    search?.setItems(
      originalData?.filter((__item) => JSON.stringify(__item).toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    );
  };

  return (
    <SearchBarContainer style={{ ...styles?.containerStyle }}>
      <SearchBarTextInput
        type="search"
        onChange={handleChange}
        placeholder={placeholderText}
        aria-label={buttonLabel}
        style={{ ...styles?.searchInputStyle }}
      />
    </SearchBarContainer>
  );
}

export { SearchBar };
