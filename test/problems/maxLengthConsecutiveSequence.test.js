const maxLengthConsecutiveSequence = require('../../problems/maxLengthConsecutiveSequence');

describe('maxLengthConsecutiveSequence()', () => {

  it('Test Case #1', () => {
    expect(maxLengthConsecutiveSequence([5, 2, 99, 3, 4, 1, 100])).toEqual(5);
  });

});