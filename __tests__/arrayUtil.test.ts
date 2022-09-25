import { flatten, slugConverter } from '../src/utils/arrayUtils';
import { characters } from '../stories/mockData';

it('Should be get location name from flatten object', () => {
  const selectedObject = characters[0];
  const flattenObjectPropertyValue = flatten(selectedObject)['location'].name;

  expect(flattenObjectPropertyValue).toBe('Citadel of Ricks')
});

it('Should be convert slug version from regular text', () => {
  const slugValue = slugConverter({ value: 'Citadel of Ricks' });

  expect(slugValue).toBe('citadel-of-ricks')
});
