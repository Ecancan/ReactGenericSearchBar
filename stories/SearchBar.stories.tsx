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

  const handleOnSearchResult = (items, value) => {
    setItems(items);
    console.log(items);
    console.log(value);
  };

  return (
    <>
      <SearchBar<Character> {...args} items={characters} onResult={handleOnSearchResult}/>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: -5,
        marginRight: -5,
        marginTop: 30
      }}>
        {items?.map((item)=> {
          return (
            <div style={{
              width: '10%',
              display: 'flex',
              padding:15,
              flexDirection: 'column',
              marginBottom:30,
              backgroundColor: '#dfdfdf',
              marginLeft: 5,
              marginRight: 5,
              borderRadius: 6
            }}>
              <div style={{marginBottom:10}}>
                <img src={item.image} alt={item.name} style={{width: '100%', borderRadius: 6}}/>
              </div>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom:5}}>
                <span>
                  ID:
                </span>
                <span>
                  {item.id}
                </span>
              </div>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom:5}}>
                <span>
                  Name:
                </span>
                <span>
                  {item.name}
                </span>
              </div>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom:5}}>
                <span>
                  Gender:
                </span>
                <span>
                  {item.gender}
                </span>
              </div>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom:5}}>
                <span>
                  Species:
                </span>
                <span>
                  {item.species}
                </span>
              </div>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom:5}}>
                <span>
                  Status:
                </span>
                <span>
                  {item.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
