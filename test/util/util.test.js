import { capitalizeFirstChar } from '../../src/util/util.js';

describe('util', () => {
  it('should capitalize 1st char only', () => {
    expect(capitalizeFirstChar('car lorry toast')).toEqual('Car lorry toast');
  });

  it('null or undefined values should return empty string', () => {
    expect(capitalizeFirstChar(undefined)).toEqual('');
    expect(capitalizeFirstChar(null)).toEqual('');
    expect(capitalizeFirstChar('')).toEqual('');
  });
});
