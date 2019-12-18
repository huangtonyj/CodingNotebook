const longestContiguousSequence = require('../../problems/longestContiguousSequence');

describe('longestContiguousSequence', () => {
  test('Test Case #1', () => {
    const user1 = ['/home', '/register', '/login', '/user', '/one', '/two'];
    const user2 = ['/home', '/red', '/login', '/user', '/one', '/pink'];
    const expected = ['/login', '/user', '/one'];
    
    expect(longestContiguousSequence(user1, user2)).toEqual(expected);
  });
});
