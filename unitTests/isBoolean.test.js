import { expect } from 'chai';
import isBoolean from '../src/isBoolean.js';

describe('isBoolean', () => {

  it('should return true for the boolean primitive `true`', () => {
    expect(isBoolean(true)).to.be.true;
  });

  it('should return true for the boolean primitive `false`', () => {
    expect(isBoolean(false)).to.be.true;
  });

  it('should return false for `null`', () => {
    expect(isBoolean(null)).to.be.false;
  });

  it('should return false for `undefined`', () => {
    expect(isBoolean(undefined)).to.be.false;
  });

  it('should return false for a string', () => {
    expect(isBoolean('true')).to.be.false;
    expect(isBoolean('false')).to.be.false;
  });

  it('should return false for a number', () => {
    expect(isBoolean(0)).to.be.false;
    expect(isBoolean(1)).to.be.false;
    expect(isBoolean(-1)).to.be.false;
  });

  it('should return false for an object', () => {
    expect(isBoolean({})).to.be.false;
    expect(isBoolean([])).to.be.false;
  });

  it('should return false for a function', () => {
    expect(isBoolean(function() {})).to.be.false;
  });

  it('should return true for a boolean object created with `new Boolean()`', () => {
    expect(isBoolean(new Boolean(true))).to.be.true;
    expect(isBoolean(new Boolean(false))).to.be.true;
  });

  it('should return false for a string object', () => {
    expect(isBoolean(new String('true'))).to.be.false;
    expect(isBoolean(new String('false'))).to.be.false;
  });

  it('should return false for a number object', () => {
    expect(isBoolean(new Number(1))).to.be.false;
    expect(isBoolean(new Number(0))).to.be.false;
  });

  it('should return false for a symbol', () => {
    expect(isBoolean(Symbol('symbol'))).to.be.false;
  });

  it('should return false for `NaN`', () => {
    expect(isBoolean(NaN)).to.be.false;
  });

  it('should return false for an empty object', () => {
    expect(isBoolean({})).to.be.false;
  });

  it('should return false for a Date object', () => {
    expect(isBoolean(new Date())).to.be.false;
  });

  it('should return false for an array', () => {
    expect(isBoolean([true, false])).to.be.false;
  });

  it('should return true for `new Boolean(true)`', () => {
    expect(isBoolean(new Boolean(true))).to.be.true;
  });

  it('should return true for `new Boolean(false)`', () => {
    expect(isBoolean(new Boolean(false))).to.be.true;
  });

});
