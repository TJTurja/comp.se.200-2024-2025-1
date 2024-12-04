import { expect } from 'chai';
import drop from '../src/drop.js';

describe('drop', () => {
  it('should drop the default number of elements (1) from the beginning', () => {
    expect(drop([1, 2, 3])).to.deep.equal([2, 3]);
  });

  it('should drop the specified number of elements from the beginning', () => {
    expect(drop([1, 2, 3], 2)).to.deep.equal([3]);
    expect(drop([1, 2, 3], 3)).to.deep.equal([]);
  });

  it('should return an empty array when dropping more elements than the array length', () => {
    expect(drop([1, 2, 3], 5)).to.deep.equal([]);
    expect(drop([1, 2, 3], 10)).to.deep.equal([]);
  });

  it('should return the original array when dropping 0 elements', () => {
    expect(drop([1, 2, 3], 0)).to.deep.equal([1, 2, 3]);
  });

  it('should handle negative values for `n` as 0 (drop nothing)', () => {
    expect(drop([1, 2, 3], -1)).to.deep.equal([1, 2, 3]);
    expect(drop([1, 2, 3], -10)).to.deep.equal([1, 2, 3]);
  });

  it('should return an empty array when the input array is null or undefined', () => {
    expect(drop(null, 2)).to.deep.equal([]);
    expect(drop(undefined, 2)).to.deep.equal([]);
  });

  it('should handle non-numeric values for `n` by treating them as 0', () => {
    expect(drop([1, 2, 3], 'foo')).to.deep.equal([1, 2, 3]);
    expect(drop([1, 2, 3], {})).to.deep.equal([1, 2, 3]);
    expect(drop([1, 2, 3], [])).to.deep.equal([1, 2, 3]);
  });

  it('should drop fractional values of `n` by flooring them to the nearest integer', () => {
    expect(drop([1, 2, 3], 1.5)).to.deep.equal([2, 3]);
    expect(drop([1, 2, 3], 2.9)).to.deep.equal([3]);
  });

  it('should handle empty arrays gracefully', () => {
    expect(drop([], 2)).to.deep.equal([]);
    expect(drop([], 0)).to.deep.equal([]);
    expect(drop([], -1)).to.deep.equal([]);
  });

  it('should handle large arrays with large `n` values', () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i + 1);
    expect(drop(largeArray, 999)).to.deep.equal([1000]);
    expect(drop(largeArray, 1000)).to.deep.equal([]);
    expect(drop(largeArray, 1001)).to.deep.equal([]);
  });
});
