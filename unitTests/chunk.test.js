import { expect } from 'chai';
import chunk from '../src/chunk.js'; 

describe('chunk', () => {
  it('should split an array into chunks of the given size', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).to.deep.equal([['a', 'b'], ['c', 'd']]);
    expect(chunk(['a', 'b', 'c', 'd'], 3)).to.deep.equal([['a', 'b', 'c'], ['d']]);
  });

  it('should handle arrays that cannot be split evenly', () => {
    expect(chunk(['a', 'b', 'c', 'd', 'e'], 2)).to.deep.equal([['a', 'b'], ['c', 'd'], ['e']]);
    expect(chunk(['a', 'b', 'c'], 4)).to.deep.equal([['a', 'b', 'c']]);
  });

  it('should return the entire array as a single chunk if size is greater than array length', () => {
    expect(chunk(['a', 'b', 'c'], 5)).to.deep.equal([['a', 'b', 'c']]);
  });

  it('should handle size of 1 by returning an array of single-element arrays', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 1)).to.deep.equal([['a'], ['b'], ['c'], ['d']]);
  });

  it('should return an empty array if the input array is empty', () => {
    expect(chunk([], 2)).to.deep.equal([]);
  });

  it('should return an empty array if size is less than 1', () => {
    expect(chunk(['a', 'b', 'c'], 0)).to.deep.equal([]);
    expect(chunk(['a', 'b', 'c'], -1)).to.deep.equal([]);
  });

  it('should return an empty array if size is NaN or invalid', () => {
    expect(chunk(['a', 'b', 'c'], NaN)).to.deep.equal([]);
    expect(chunk(['a', 'b', 'c'], 'invalid')).to.deep.equal([]);
  });

  it('should default to size 1 if size is not provided', () => {
    expect(chunk(['a', 'b', 'c'])).to.deep.equal([['a'], ['b'], ['c']]);
  });

  it('should handle null or undefined arrays', () => {
    expect(chunk(null, 2)).to.deep.equal([]);
    expect(chunk(undefined, 2)).to.deep.equal([]);
  });

  it('should handle size being a float by flooring the value', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2.5)).to.deep.equal([['a', 'b'], ['c', 'd']]);
  });

});
