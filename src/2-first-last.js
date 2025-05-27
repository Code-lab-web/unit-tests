import { first,Last} from './1- first-last.js';

describe('2-first-last', () => {
  it('should return the first items from an array with two items', () => {
    expect(firstLast(['a', 'b'])).toEqual('First: a, Last: b')
  })
it('Should only return the first item if the array has one item', () => {
  expect(firstLast(['bob'])).toEqual('Only item:bob')
})
it('Should return "No items!" if the array is empty', () => {
  expect(firstLast([])).toEqual('No items!')
})
});
export const firstLast = (items) => {
  return `First: ${items[0]}, Last: ${items[items.length - 1]}`

}
