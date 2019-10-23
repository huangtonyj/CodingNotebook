const caesarCipherEncryptor = require('../../problems/caesarCipherEncryptor');

test('caesarCipherEncryptor()', () => {
  expect(caesarCipherEncryptor('abc', 0)).toEqual('abc');

  expect(caesarCipherEncryptor('abc', 3)).toEqual('def');

  expect(caesarCipherEncryptor('xyz', 2)).toEqual('zab');

  expect(caesarCipherEncryptor('xyz', 5)).toEqual('cde');

  expect(caesarCipherEncryptor('abc', 26)).toEqual('abc');

  expect(caesarCipherEncryptor('abc', 52)).toEqual('abc');

  expect(caesarCipherEncryptor('abc', 57)).toEqual('fgh');
});