import { CSSProperties } from 'react';

export interface SearchBarStyleProps {
  containerStyle?: CSSProperties;
  searchInputStyle?: CSSProperties;
}

export interface SearchBarProps<T> {
  buttonLabel?: string;
  placeholderText?: string;
  items?: Array<T> | undefined;
  onChange?: (value: string) => void;
  onResult?: (items: Array<T> | undefined, value?: string) => void;
  styles?: SearchBarStyleProps;
}
