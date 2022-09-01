# React Generic Search Bar

This module is generic search bar component. Main purpose of this module is filter with just typing custom properties your item data.

## Demo 

![Demo1](https://s1.gifyu.com/images/Screen-Recording-2022-08-29-at-01.07.21.gif)
![Demo1](https://s1.gifyu.com/images/Screen-Recording-2022-08-29-at-01.06.49.gif)

## Installation

##### With Yarn

```
yarn add @ecancan/react-generic-search-bar
```

##### With Npm

```
npm install @ecancan/react-generic-search-bar
```
## Usage

### Basic

```js
import { SearchBar } from '@ecancan/react-generic-search-bar';

<SearchBar<ItemsType>
  search={{ items: characters, setItems: setCharacters }}
  originalData={characters}
  placeholderText={'Search and filter. Eg. /gender:male /species:alien ...'}
  />
```

All props are optional. Actually no need any props for basic usage.

### Advanced

```js
import { SearchBar } from '@ecancan/react-generic-search-bar';

<SearchBar<ItemsType>
  search={{ items: characters, setItems: setCharacters }}
  originalData={characters}
  onChange={(value) => console.log(value)}
  buttonLabel={'Search...'}
  styles={{containerStyle: styleValue, searchInputStyle: styleValue}}
  placeholderText={'Search and filter. Eg. /gender:male /species:alien ...'}
  />
```

## All Props

| Prop Name                 | Necessity | Value Example                               | Value Type                                                     |
|---------------------------|-----------|---------------------------------------------|----------------------------------------------------------------|
| `search`                  | optional  | [Advanced](#advanced)                       | `items: T[]; setItems: Dispatch<SetStateAction<T[]>>` |
| `buttonLabel`             | optional          | [Advanced](#advanced)                                    | `string`                                                       |
| `placeholderText`         | optional          | [Advanced](#advanced)                                    | `string`                                                       |
| `originalData`            | optional          | [Advanced](#advanced)                                    | `array`                                                        |
| `onChange`                | optional          | [Advanced](#advanced)                        | `((value: string) => void)`                                    |
| `styles`                  | optional          | [Advanced](#advanced)                        | `SearchBarStyleProps`                                          |

# Next Features
- [ ] Query string builder
- [ ] Openable type map modal with shortcut
- [ ] Type suggestion on searching (maybe autocomplete 😝)

# How do you contribute

##### Git Clone
```
git clone https://github.com/Ecancan/ReactGenericSearchBar.git
```
### Install packages & Run

##### With Yarn
```
yarn install
yarn run storybook
```

##### With Npm
```
npm install
npm run storybook
```

##### Build 
```
yarn run build
```
or
```
npm run build
```

# Note
If you see any bug or issue please open a issue or send a contribution. Thank you for your time on this module. :)
