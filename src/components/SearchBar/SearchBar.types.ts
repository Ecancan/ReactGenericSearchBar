import { CSSProperties, Dispatch, SetStateAction } from 'react';

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
