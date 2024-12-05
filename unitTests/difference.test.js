import { expect } from 'chai';
import difference from '../src/difference.js'; // Adjust the import path as needed

describe('difference', () => {
  
  it('should return an array of elements in the first array but not in the second array', () => {
    expect(difference([2, 1], [2, 3])).to.deep.equal([1]);
  });

  it('should return an empty array when the first array is empty', () => {
    expect(difference([], [2, 3])).to.deep.equal([]);
  });

  it('should return the first array when no second array is provided', () => {
    expect(difference([2, 1])).to.deep.equal([2, 1]);
  });

  it('should return an empty array if all elements in the first array are in the second array', () => {
    expect(difference([2, 1], [1, 2])).to.deep.equal([]);
  });

  it('should return the first array when no matching elements are found in the second array', () => {
    expect(difference([2, 1], [3, 4])).to.deep.equal([2, 1]);
  });

  it('should handle multiple arrays to exclude values from', () => {
    expect(difference([2, 1, 3, 4], [2, 3], [1])).to.deep.equal([4]);
  });

  it('should correctly handle arrays of different lengths', () => {
    expect(difference([2, 1, 3, 4], [1, 2], [3])).to.deep.equal([4]);
  });

  it('should not mutate the original array', () => {
    const arr = [2, 1];
    const result = difference(arr, [1, 3]);
    expect(arr).to.deep.equal([2, 1]);
    expect(result).to.deep.equal([2]);
  });

  it('should handle empty values to exclude', () => {
    expect(difference([2, 1], [])).to.deep.equal([2, 1]);
  });

  it('should work when the elements in the first array are all NaN', () => {
    expect(difference([NaN, NaN, NaN], [NaN])).to.deep.equal([]);
  });

  it('should handle primitive types correctly', () => {
    expect(difference([2, 1, 4], [2])).to.deep.equal([1, 4]);
    expect(difference([5, 10, 15], [10, 5])).to.deep.equal([15]);
  });

  it('should return an empty array when the first array is null or undefined', () => {
    expect(difference(null, [2, 3])).to.deep.equal([]);
    expect(difference(undefined, [2, 3])).to.deep.equal([]);
  });

  it('should handle arrays of arrays properly', () => {
    expect(difference([[1], [2]], [[1]]))
      .to.deep.equal([[2]]);
  });

  it('should return an empty array when the first array contains undefined values and they are in the second array', () => {
    expect(difference([undefined, 2, 3], [undefined, 1])).to.deep.equal([2, 3]);
  });

});
