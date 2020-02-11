const topologicalSort = require('../../problems/topologicalSort');

describe('topologicalSort()', () => {
  it('Test Case #1', () => {
    const jobs = [1, 2, 3, 4, 5, 6, 7, 8];
    const deps = [
      [3, 1],
      [8, 1],
      [8, 7],
      [5, 7],
      [5, 2],
      [1, 4],
      [1, 6],
      [1, 2],
      [7, 6],
    ];
    const order = topologicalSort(jobs, deps);
    expect(isValidTopologicalOrder(order, jobs, deps)).toEqual(true);
  });

  it('Test Case #2', () => {
    const jobs = [1, 2, 3, 4, 5, 6, 7, 8];
    const deps = [
      [3, 1],
      [8, 1],
      [8, 7],
      [5, 7],
      [5, 2],
      [1, 4],
      [6, 7],
      [1, 2],
      [7, 6],
    ];
    const order = topologicalSort(jobs, deps);
    expect(order).toEqual([]);
  });

  it('Test Case #3', () => {
    const jobs = [1, 2, 3, 4, 5, 6, 7, 8];
    const deps = [
      [3, 1],
      [8, 1],
      [8, 7],
      [5, 7],
      [5, 2],
      [1, 4],
      [1, 6],
      [1, 2],
      [7, 6],
      [4, 6],
      [6, 2],
      [2, 3],
    ];
    const order = topologicalSort(jobs, deps);
    expect(order).toEqual([]);
  });

  it('Test Case #4', () => {
    const jobs = [1, 2, 3, 4, 5, 6, 7, 8];
    const deps = [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 8],
      [8, 1],
    ];
    const order = topologicalSort(jobs, deps);
    expect(order).toEqual([]);
  });

  it('Test Case #5', () => {
    const jobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const deps = [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [7, 6],
      [7, 8],
      [8, 1],
    ];
    const order = topologicalSort(jobs, deps);
    expect(isValidTopologicalOrder(order, jobs, deps)).toEqual(true);
  });

  it('Test Case #6', () => {
    const jobs = [1, 2, 3, 4, 5, 6, 7, 8];
    const deps = [
      [1, 2],
      [3, 5],
      [4, 6],
      [3, 6],
      [1, 7],
      [7, 8],
      [1, 8],
      [2, 8],
    ];
    const order = topologicalSort(jobs, deps);
    expect(isValidTopologicalOrder(order, jobs, deps)).toEqual(true);
  });

  it('Test Case #7', () => {
    const jobs = [1, 2, 3, 4, 5, 6, 7, 8];
    const deps = [
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
      [1, 6],
      [1, 7],
      [2, 8],
      [3, 8],
      [4, 8],
      [5, 8],
      [6, 8],
      [7, 8],
    ];
    const order = topologicalSort(jobs, deps);
    expect(isValidTopologicalOrder(order, jobs, deps)).toEqual(true);
  });

  it('Test Case #8', () => {
    const jobs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const deps = [
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
      [1, 6],
      [1, 7],
      [2, 8],
      [3, 8],
      [4, 8],
      [5, 8],
      [6, 8],
      [7, 8],
      [2, 3],
      [2, 4],
      [5, 4],
      [7, 6],
      [6, 2],
      [6, 3],
      [6, 5],
      [5, 9],
      [9, 8],
      [8, 0],
      [4, 0],
      [5, 0],
      [9, 0],
      [2, 0],
      [3, 9],
      [3, 10],
      [10, 11],
      [11, 12],
      [2, 12],
    ];
    const order = topologicalSort(jobs, deps);
    expect(isValidTopologicalOrder(order, jobs, deps)).toEqual(true);
  });

  it('Test Case #9', () => {
    const jobs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const deps = [
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
      [1, 6],
      [1, 7],
      [2, 8],
      [3, 8],
      [4, 8],
      [5, 8],
      [6, 8],
      [7, 8],
      [2, 3],
      [2, 4],
      [5, 4],
      [7, 6],
      [6, 2],
      [6, 3],
      [6, 5],
      [5, 9],
      [9, 8],
      [8, 0],
      [4, 0],
      [5, 0],
      [9, 0],
      [2, 0],
      [3, 9],
      [3, 10],
      [10, 11],
      [11, 12],
      [12, 2],
    ];
    const order = topologicalSort(jobs, deps);
    expect(order).toEqual([]);
  });

  it('Test Case #10', () => {
    const jobs = [1, 2, 3, 4];
    const deps = [
      [1, 2],
      [1, 3],
      [3, 2],
      [4, 2],
      [4, 3],
    ];
    const order = topologicalSort(jobs, deps);
    expect(isValidTopologicalOrder(order, jobs, deps)).toEqual(true);
  });

  it('Test Case #11', () => {
    const jobs = [1, 2, 3, 4, 5];
    const deps = [];
    const order = topologicalSort(jobs, deps);
    expect(isValidTopologicalOrder(order, jobs, deps)).toEqual(true);
  });

  it('Test Case #12', () => {
    const jobs = [1, 2, 3, 4, 5];
    const deps = [
      [1, 4],
      [5, 2],
    ];
    const order = topologicalSort(jobs, deps);
    expect(isValidTopologicalOrder(order, jobs, deps)).toEqual(true);
  });
});

function isValidTopologicalOrder(order, jobs, deps) {
  const visited = {};
  for (const candidate of order) {
    for (const [prereq, job] of deps) {
      if (candidate === prereq && job in visited) return false;
    }
    visited[candidate] = true;
  }
  for (const job of jobs) {
    if (!(job in visited)) return false;
  }
  return order.length === jobs.length;
}
