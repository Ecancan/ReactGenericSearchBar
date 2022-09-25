import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import { SearchBar } from '../src';
import { characters } from '../stories/mockData';

it('SearchBar initial snapshot', () => {
  const component = renderer.create(
    <SearchBar/>
  );
  const snapshot = component.toJSON();

  expect(snapshot).toMatchSnapshot();
});

it('Should be search "Jerry Smith"', () => {
  const onResult = jest.fn((items) => items);

  const { getByPlaceholderText } = render(
    <SearchBar items={characters} onResult={onResult}/>
  );

  fireEvent.change(getByPlaceholderText('Search'), { target: { value: 'Jerry Smith' } });
  expect(onResult).toHaveReturnedWith([characters[4]]);
});

it('Should be search "/gender:male"', () => {
  const onResult = jest.fn((items) => items[0]);

  const { getByPlaceholderText } = render(
    <SearchBar items={characters} onResult={onResult}/>
  );

  fireEvent.change(getByPlaceholderText('Search'), { target: { value: '/gender:male ' } });
  expect(onResult).toHaveReturnedWith(characters[0]);
});

it('Should be search "/gender:female"', () => {
  const onResult = jest.fn((items) => items[0]);

  const { getByPlaceholderText } = render(
    <SearchBar items={characters} onResult={onResult}/>
  );

  fireEvent.change(getByPlaceholderText('Search'), { target: { value: '/gender:female ' } });
  expect(onResult).toHaveReturnedWith(characters[2]);
});

it('Should be search "/status:dead Adjudicator Rick"', () => {
  const onResult = jest.fn((items) => items[0]);

  const { getByPlaceholderText } = render(
    <SearchBar items={characters} onResult={onResult}/>
  );

  fireEvent.change(getByPlaceholderText('Search'), { target: { value: '/status:dead Adjudicator Rick' } });
  expect(onResult).toHaveReturnedWith(characters[7]);
});

it('Should be search "Adjudicator Rick"', () => {
  const onResult = jest.fn((items) => items[0]);

  const { getByPlaceholderText } = render(
    <SearchBar items={characters} onResult={onResult}/>
  );

  fireEvent.change(getByPlaceholderText('Search'), { target: { value: 'Adjudicator Rick' } });
  expect(onResult).toHaveReturnedWith(characters[7]);
});

it('Should be search "/gender:male /status:dead"', () => {
  const onResult = jest.fn((items) => items[0]);

  const { getByPlaceholderText } = render(
    <SearchBar items={characters} onResult={onResult}/>
  );

  fireEvent.change(getByPlaceholderText('Search'), { target: { value: '/gender:male /status:dead ' } });
  expect(onResult).toHaveReturnedWith(characters[7]);
});

it('Should be search "/gender:male /status:dead Adjudicator Rick"', () => {
  const onResult = jest.fn((items) => items[0]);

  const { getByPlaceholderText } = render(
    <SearchBar items={characters} onResult={onResult}/>
  );

  fireEvent.change(getByPlaceholderText('Search'), { target: { value: '/gender:male /status:dead Adjudicator Rick' } });
  expect(onResult).toHaveReturnedWith(characters[7]);
});

it('Should be search "/species:human "', () => {
  const onResult = jest.fn((items) => items[0]);

  const { getByPlaceholderText } = render(
    <SearchBar items={characters} onResult={onResult}/>
  );

  fireEvent.change(getByPlaceholderText('Search'), { target: { value: '/species:human ' } });
  expect(onResult).toHaveReturnedWith(characters[0]);
});

it('Should be return same value with typing value', () => {
  const onChange = jest.fn((value) => value);

  const { getByPlaceholderText } = render(
    <SearchBar items={characters} onChange={onChange}/>
  );

  fireEvent.change(getByPlaceholderText('Search'), { target: { value: 'Testing Value' } });
  expect(onChange).toHaveReturnedWith('Testing Value');
});
