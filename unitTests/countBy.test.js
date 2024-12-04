import { expect } from 'chai';
import countBy from '../src/countBy.js';

describe('countBy', () => {
  it('should count elements by a boolean property', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'betty', active: true },
      { user: 'fred', active: false },
    ];
    const result = countBy(users, (value) => value.active);
    expect(result).to.deep.equal({ true: 2, false: 1 });
  });

  it('should count numbers by whether theyre odd or even', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = countBy(numbers, (value) => (value % 2 === 0 ? 'even' : 'odd'));
    expect(result).to.deep.equal({ odd: 3, even: 2 });
  });

  it('should handle an empty collection', () => {
    const result = countBy([], (value) => value);
    expect(result).to.deep.equal({});
  });

  it('should count first letters of string', () => {
    const words = ['monkey', 'ape', 'mongoose', 'albatross', 'chimpanzee'];
    const result = countBy(words, (value) => value[0]);
    expect(result).to.deep.equal({ m: 2, a: 2, c: 1 });
  });

  it('should count by a property that is undefined', () => {
    const items = [{ type: 'a' }, { type: 'b' }, {}, { type: 'a' }];
    const result = countBy(items, (value) => value.type || 'undefined');
    expect(result).to.deep.equal({ a: 2, b: 1, undefined: 1 });
  });

  it('should handle non-object collections like strings', () => {
    const result = countBy('hello', (value) => value);
    expect(result).to.deep.equal({ h: 1, e: 1, l: 2, o: 1 });
  });

  it('should work with numbers as keys', () => {
    const numbers = [1, 2, 2, 3, 3, 3];
    const result = countBy(numbers, (value) => value);
    expect(result).to.deep.equal({ 1: 1, 2: 2, 3: 3 });
  });

});
