import { expect } from 'chai';
import camelCase from '../src/camelCase.js';

describe('camelCase', () => {
  it('should convert a single word to lowercase', () => {
    expect(camelCase('MONKEY')).to.equal('monkey');
  });

  it('should convert multiple words to camel case', () => {
    expect(camelCase('mOn Key nuTs')).to.equal('monKeyNuts');
  });

  it('should handle special characters and delimiters', () => {
    expect(camelCase('-_"mon-_./key-*' )).to.equal('monKey');
  });

  it('should return empty string when input is empty', () => {
    expect(camelCase('')).to.equal('');
  });

  it('should handle numbers in strings', () => {
    expect(camelCase('foo2bar')).to.equal('foo2Bar');
    expect(camelCase('foo 2 bar')).to.equal('foo2Bar');
    expect(camelCase('123foo')).to.equal('123Foo');
  });

  it('should handle non-string inputs by converting them to strings', () => {
    expect(camelCase(123)).to.equal('123');
    expect(camelCase(null)).to.equal('');
    expect(camelCase(undefined)).to.equal('');
    expect(camelCase([])).to.equal('');
    expect(camelCase(['foo', 'bar'])).to.equal('foobar');
    expect(camelCase({})).to.equal('[objectObject]');
  });


  it('should handle longer strings', () => {
    const input = 'this is a very long string with multiple words';
    const expected = 'thisIsAVeryLongStringWithMultipleWords';
    expect(camelCase(input)).to.equal(expected);
  });
});
