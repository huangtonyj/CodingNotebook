const validIPAddresses = require('../../problems/validIPAddresses');

describe('validIPAddresses()', () => {
  
  it('Test Case 1', () => {
    const expected = ['1.9.216.80', '1.92.16.80', '1.92.168.0', '19.2.16.80', '19.2.168.0', '19.21.6.80', '19.21.68.0', '19.216.8.0', '192.1.6.80', '192.1.68.0', '192.16.8.0'];
    const actual = validIPAddresses('1921680');

    expected.forEach(el => expect(actual).toContain(el));
  });
  
  it('Test Case 2', () => {
    const expected = ['3.70.0.100', '37.0.0.100'];
    const actual = validIPAddresses('3700100');

    expected.forEach(el => expect(actual).toContain(el));
  });
  
  it('Test Case 3', () => {
    const expected = ['9.7.4.3'];
    const actual = validIPAddresses('9743');

    expected.forEach(el => expect(actual).toContain(el));
  });
  
  it('Test Case 4', () => {
    const expected = ['9.7.4.30', '9.7.43.0', '9.74.3.0', '97.4.3.0'];
    const actual = validIPAddresses('97430');

    expected.forEach(el => expect(actual).toContain(el));
  });
  
  it('Test Case 5', () => {
    const expected = ['9.9.74.30', '9.97.4.30', '9.97.43.0', '99.7.4.30', '99.7.43.0', '99.74.3.0'];
    const actual = validIPAddresses('997430');

    expected.forEach(el => expect(actual).toContain(el));
  });
  
  it('Test Case 6', () => {
    const expected = ['255.255.255.255'];
    const actual = validIPAddresses('255255255255');

    expected.forEach(el => expect(actual).toContain(el));
  });
  
  it('Test Case 7', () => {
    const expected = [];
    const actual = validIPAddresses('255255255256');

    expected.forEach(el => expect(actual).toContain(el));
  });
  
  it('Test Case 8', () => {
    const expected = ['99.99.99.99'];
    const actual = validIPAddresses('99999999');

    expected.forEach(el => expect(actual).toContain(el));
  });
  
  it('Test Case 9', () => {
    const expected = ['33.13.33.13', '33.133.3.13', '33.133.31.3'];
    const actual = validIPAddresses('33133313');

    expected.forEach(el => expect(actual).toContain(el));
  });
  
  it('Test Case 10', () => {
    const expected = ['0.0.0.10'];
    const actual = validIPAddresses('00010');

    expected.forEach(el => expect(actual).toContain(el));
  });
  
  it('Test Case 11', () => {
    const expected = ['1.0.0.100', '10.0.10.0', '100.1.0.0'];
    const actual = validIPAddresses('100100');

    expected.forEach(el => expect(actual).toContain(el));
  });
  
  it('Test Case 12', () => {
    const expected = ['10.7.23.10', '10.7.231.0', '10.72.3.10', '10.72.31.0', '107.2.3.10', '107.2.31.0', '107.23.1.0'];
    const actual = validIPAddresses('1072310');

    expected.forEach(el => expect(actual).toContain(el));
  });
  
  it('Test Case 13', () => {
    const expected = [];
    const actual = validIPAddresses('1');

    expected.forEach(el => expect(actual).toContain(el));
  });
  
  it('Test Case 14', () => {
    const expected = [];
    const actual = validIPAddresses('11');

    expected.forEach(el => expect(actual).toContain(el));
  });
  
  it('Test Case 15', () => {
    const expected = [];
    const actual = validIPAddresses('111');

    expected.forEach(el => expect(actual).toContain(el));
  });
  
  it('Test Case 16', () => {
    const expected = [];
    const actual = validIPAddresses('00001');

    expected.forEach(el => expect(actual).toContain(el));
  });

});