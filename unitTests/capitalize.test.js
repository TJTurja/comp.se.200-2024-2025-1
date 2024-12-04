import { expect } from 'chai';
import capitalize from '../src/capitalize.js'; 

describe('capitalize', () => {
  it('should capitalize a lowercase string', () => {
    expect(capitalize('monkey')).to.equal('Monkey');
  });

  it('should capitalize an uppercase string', () => {
    expect(capitalize('MONKEY')).to.equal('Monkey');
  });

  it('should capitalize a mixed-case string', () => {
    expect(capitalize('mOnKeY')).to.equal('Monkey');
  });

  it('should handle spaces', () => {
    expect(capitalize(' monkey')).to.equal(' monkey'); 
    expect(capitalize('mon key')).to.equal('Mon key');
  });

  it('should handle special characters', () => {
    expect(capitalize('!monkey')).to.equal('!monkey');
  });

  it('should handle an empty string', () => {
    expect(capitalize('')).to.equal('');
  });

  it('should handle null or undefined input', () => {
    expect(capitalize(null)).to.equal('');
    expect(capitalize(undefined)).to.equal('');
  });

  it('should handle non-string inputs', () => {
    expect(capitalize(42)).to.equal('42');
    expect(capitalize(true)).to.equal('True');
    expect(capitalize({})).to.equal('[object object]');
  });

  it('should handle strings nordic alphabet', () => {
    expect(capitalize('åäö')).to.equal('Åäö');
  });
});
