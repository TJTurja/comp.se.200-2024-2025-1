import { expect } from 'chai';
import isEmpty from '../src/isEmpty.js';

describe('isEmpty', () => {
  
  it('should return true for null', () => {
    expect(isEmpty(null)).to.equal(true);
  });

  it('should return true for undefined', () => {
    expect(isEmpty(undefined)).to.equal(true);
  });

  it('should return true for boolean values (true)', () => {
    expect(isEmpty(true)).to.equal(true);
  });

  it('should return true for boolean values (false)', () => {
    expect(isEmpty(false)).to.equal(true);
  });

  it('should return true for number values', () => {
    expect(isEmpty(0)).to.equal(true);
    expect(isEmpty(1)).to.equal(true);
  });

  it('should return true for NaN', () => {
    expect(isEmpty(NaN)).to.equal(true);
  });

  it('should return false for non-empty arrays', () => {
    expect(isEmpty([1, 2, 3])).to.equal(false);
  });

  it('should return true for empty arrays', () => {
    expect(isEmpty([])).to.equal(true);
  });

  it('should return false for non-empty strings', () => {
    expect(isEmpty('abc')).to.equal(false);
  });

  it('should return true for empty strings', () => {
    expect(isEmpty('')).to.equal(true);
  });

  it('should return false for non-empty objects', () => {
    expect(isEmpty({ a: 1 })).to.equal(false);
    expect(isEmpty({ 'key': 'value' })).to.equal(false);
  });

  it('should return true for empty objects', () => {
    expect(isEmpty({})).to.equal(true);
  });

  it('should return true for objects with only non-enumerable properties', () => {
    const obj = Object.create(null); 
    expect(isEmpty(obj)).to.equal(true);
  });

  it('should return false for non-empty map objects', () => {
    const map = new Map();
    map.set('key', 'value');
    expect(isEmpty(map)).to.equal(false);
  });

  it('should return true for empty map objects', () => {
    const map = new Map();
    expect(isEmpty(map)).to.equal(true);
  });

  it('should return false for non-empty set objects', () => {
    const set = new Set();
    set.add(1);
    expect(isEmpty(set)).to.equal(false);
  });

  it('should return true for empty set objects', () => {
    const set = new Set();
    expect(isEmpty(set)).to.equal(true);
  });

  it('should return false for non-empty buffers', () => {
    const buffer = Buffer.from([1, 2, 3]);
    expect(isEmpty(buffer)).to.equal(false);
  });

  it('should return true for empty buffers', () => {
    const buffer = Buffer.alloc(0);
    expect(isEmpty(buffer)).to.equal(true);
  });

  it('should return false for non-empty typed arrays', () => {
    const typedArray = new Int8Array([1, 2, 3]);
    expect(isEmpty(typedArray)).to.equal(false);
  });

  it('should return true for empty typed arrays', () => {
    const typedArray = new Int8Array(0);
    expect(isEmpty(typedArray)).to.equal(true);
  });

  it('should return false for non-empty arguments object', () => {
    (function() {
      const args = arguments;
      expect(isEmpty(args)).to.equal(false);
    })(1, 2, 3);
  });

  it('should return true for empty arguments object', () => {
    (function() {
      const args = arguments;
      expect(isEmpty(args)).to.equal(true);
    })();
  });

  it('should return false for non-empty prototype object', () => {
    const protoObj = Object.create(null);
    protoObj.key = 'value';
    expect(isEmpty(protoObj)).to.equal(false);
  });

  it('should return true for prototype object with no properties', () => {
    const protoObj = Object.create(null);
    expect(isEmpty(protoObj)).to.equal(true);
  });

  it('should return true for object with non-enumerable properties', () => {
    const obj = {};
    Object.defineProperty(obj, 'nonEnum', {
      value: 'This is non-enumerable',
      enumerable: false
    });
    expect(isEmpty(obj)).to.equal(true);
  });

  it('should return false for objects with non-standard constructors', () => {
    function MyClass() {}
    const myObj = new MyClass();
    myObj.customKey = 'value';
    expect(isEmpty(myObj)).to.equal(false);
  });

});
