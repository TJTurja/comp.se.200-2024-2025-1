import { expect } from 'chai';
import isDate from '../src/isDate.js';

describe('isDate', () => {
  it('should return true for a valid Date object', () => {
    expect(isDate(new Date())).to.be.true;
  });

  it('should return false for a string representing a date', () => {
    expect(isDate('Mon April 23 2012')).to.be.false;
    expect(isDate('2024-12-05')).to.be.false;
    expect(isDate('2024/12/05')).to.be.false;
  });

  it('should return false for other object types', () => {
    expect(isDate({})).to.be.false;
    expect(isDate([])).to.be.false;
    expect(isDate(function() {})).to.be.false;
  });

  it('should return false for null or undefined', () => {
    expect(isDate(null)).to.be.false;
    expect(isDate(undefined)).to.be.false;
  });

  it('should return false for boolean values', () => {
    expect(isDate(true)).to.be.false;
    expect(isDate(false)).to.be.false;
  });

  it('should return false for numbers', () => {
    expect(isDate(123)).to.be.false;
    expect(isDate(0)).to.be.false;
    expect(isDate(-1)).to.be.false;
    expect(isDate(NaN)).to.be.false;
  });

  it('should return false for symbols', () => {
    expect(isDate(Symbol('symbol'))).to.be.false;
  });

  it('should return false for functions', () => {
    expect(isDate(function() {})).to.be.false;
  });

  it('should return false for dates created with `Date.parse` or string representations', () => {
    const parsedDate = Date.parse('2024-12-05');
    expect(isDate(parsedDate)).to.be.false;
    expect(isDate(new Date('2024-12-05'))).to.be.true;
  });

  it('should handle edge cases for `Date` constructor', () => {
    const invalidDate = new Date('invalid date');
    expect(isDate(invalidDate)).to.be.true;

    const validDate = new Date(2024, 11, 5);
    expect(isDate(validDate)).to.be.true;
  });
});
