const {
  getNthFibDP,
  getNthFibRecursive
} = require('../../problems/fibs');

test('getNthFibDP()', () => {
    expect(getNthFibDP(1)).toEqual(0);
    expect(getNthFibDP(2)).toEqual(1);
    expect(getNthFibDP(3)).toEqual(1);
    expect(getNthFibDP(4)).toEqual(2);
    expect(getNthFibDP(5)).toEqual(3);
    expect(getNthFibDP(6)).toEqual(5);
    expect(getNthFibDP(7)).toEqual(8);
    expect(getNthFibDP(8)).toEqual(13);
    expect(getNthFibDP(9)).toEqual(21);
    expect(getNthFibDP(10)).toEqual(34);
    expect(getNthFibDP(11)).toEqual(55);
    expect(getNthFibDP(12)).toEqual(89);
    expect(getNthFibDP(13)).toEqual(144);
    expect(getNthFibDP(14)).toEqual(233);
    expect(getNthFibDP(15)).toEqual(377);
    expect(getNthFibDP(16)).toEqual(610);
    expect(getNthFibDP(17)).toEqual(987);
    expect(getNthFibDP(18)).toEqual(1597);
    expect(getNthFibDP(45)).toEqual(701408733);
});

test('getNthFibRecursive()', () => {
    expect(getNthFibRecursive(1)).toEqual(0);
    expect(getNthFibRecursive(2)).toEqual(1);
    expect(getNthFibRecursive(3)).toEqual(1);
    expect(getNthFibRecursive(4)).toEqual(2);
    expect(getNthFibRecursive(5)).toEqual(3);
    expect(getNthFibRecursive(6)).toEqual(5);
    expect(getNthFibRecursive(7)).toEqual(8);
    expect(getNthFibRecursive(8)).toEqual(13);
    expect(getNthFibRecursive(9)).toEqual(21);
    expect(getNthFibRecursive(10)).toEqual(34);
    expect(getNthFibRecursive(11)).toEqual(55);
    expect(getNthFibRecursive(12)).toEqual(89);
    expect(getNthFibRecursive(13)).toEqual(144);
    expect(getNthFibRecursive(14)).toEqual(233);
    expect(getNthFibRecursive(15)).toEqual(377);
    expect(getNthFibRecursive(16)).toEqual(610);
    expect(getNthFibRecursive(17)).toEqual(987);
    expect(getNthFibRecursive(18)).toEqual(1597);
    expect(getNthFibRecursive(45)).toEqual(701408733);
});