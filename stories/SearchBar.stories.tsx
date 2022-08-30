import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { SearchBar } from '../src';
import { characters } from './mockData';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode?: Array<string>;
  url: string;
  created: string;
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'SearchBar',
  component: SearchBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof SearchBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchBar> = (args) => {
  const [items, setItems] = useState<Character[] | undefined>(characters);

  return (
    <>
      <SearchBar<Character> {...args} search={{ items, setItems }} originalData={characters}/>
      {items?.map((item)=> {
        return <div>{item.name}</div>
      })}
    </>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
