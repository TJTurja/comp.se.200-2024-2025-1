import {expect} from 'chai';
import defaultToAny from '../src/defaultToAny.js';


describe('defaultToAny', () => {
  it('should return initial value if it is valid integer', () => {
    expect(defaultToAny(1, 10, 20)).to.equal(1);
    expect(defaultToAny('valid', 'default1', 'default2')).to.equal('valid');
  });
  it('should return initial value if it is valid string', () => {
    expect(defaultToAny('valid', 'default1', 'default2')).to.equal('valid');
  });

  it('should return first valid default value when initial value is undefined', () => {
    expect(defaultToAny(undefined, 10, 20)).to.equal(10);
  });

  it('should return first valid default value when initial value is null', () => {
    expect(defaultToAny(null, 10, 20)).to.equal(10);
  });

  it('should return first valid default value when initial value is NaN', () => {
    expect(defaultToAny(NaN, 10, 20)).to.equal(10);
  });

  it('should handle mix of invalid and valid values', () => {
    expect(defaultToAny(undefined, null, NaN, 20)).to.equal(20);
  });

  it('should return NaN if all values are invalid and initial value is NaN', () => {
    const result = defaultToAny(NaN, null, undefined, NaN);
    expect(result).to.be.NaN;
  });

  it('should return undefined if all values are invalid and initial value is undefined', () => {
    const result = defaultToAny(undefined, null, NaN, undefined);
    expect(result).to.be.undefined;
  });

  it('should return null if all values are invalid and initial value is null', () => {
    const result = defaultToAny(null, undefined, NaN, null);
    expect(result).to.be.null;
  });

  it('should work with no default values', () => {
    expect(defaultToAny(undefined)).to.be.undefined;
    expect(defaultToAny(null)).to.be.null;
    expect(defaultToAny(NaN)).to.be.NaN;
  });

  it('should be able to handle zeros and empty strings', () => {
    expect(defaultToAny('', 'default')).to.equal('');
    expect(defaultToAny(0, 10)).to.equal(0);
  });
});
