const powerSet = require('../../problems/powerSet');

describe('powerSet()', () => {
  function sortAndStringify(array) {
    return array.sort((a, b) => a - b).join(',');
  }

  it('Test Case #1', function () {
    const output = powerSet([]).map(sortAndStringify);
    expect(output.length).toEqual(1);
    expect(output).toContain('');
  });

  it('Test Case #2', function () {
    const output = powerSet([1]).map(sortAndStringify);
    expect(output.length).toEqual(2);
    expect(output).toContain('');
    expect(output).toContain('1');
  });

  it('Test Case #3', function () {
    const output = powerSet([1, 2]).map(sortAndStringify);
    expect(output.length).toEqual(4);
    expect(output).toContain('');
    expect(output).toContain('1');
    expect(output).toContain('2');
    expect(output).toContain('1,2');
  });

  it('Test Case #4', function () {
    const output = powerSet([1, 2, 3]).map(sortAndStringify);
    expect(output.length).toEqual(8);
    expect(output).toContain('');
    expect(output).toContain('1');
    expect(output).toContain('2');
    expect(output).toContain('1,2');
    expect(output).toContain('3');
    expect(output).toContain('1,3');
    expect(output).toContain('2,3');
    expect(output).toContain('1,2,3');
  });

  it('Test Case #5', function () {
    const output = powerSet([1, 2, 3, 4]).map(sortAndStringify);
    expect(output.length).toEqual(16);
    expect(output).toContain('');
    expect(output).toContain('1');
    expect(output).toContain('2');
    expect(output).toContain('1,2');
    expect(output).toContain('3');
    expect(output).toContain('1,3');
    expect(output).toContain('2,3');
    expect(output).toContain('1,2,3');
    expect(output).toContain('4');
    expect(output).toContain('1,4');
    expect(output).toContain('2,4');
    expect(output).toContain('1,2,4');
    expect(output).toContain('3,4');
    expect(output).toContain('1,3,4');
    expect(output).toContain('2,3,4');
    expect(output).toContain('1,2,3,4');
  });


});