const reverseLinkList = require('../../problems/reverseLinkList');

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  addMany(values) {
    let current = this;
    while (current.next !== null) {
      current = current.next;
    }
    for (const value of values) {
      current.next = new LinkedList(value);
      current = current.next;
    }
    return this;
  }

  getNodesInArray() {
    const nodes = [];
    let current = this;
    while (current !== null) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes;
  }
}

describe('reverseLinkList()', () => {

  // expect(moveZeros([0, 0, 0])).toEqual([0, 0, 0]);

  it('Test Case #1', function() {
    const test = new LinkedList(0);
    const result = reverseLinkList(test).getNodesInArray();
    const expected = new LinkedList(0).getNodesInArray();
    expect(result).toEqual(expected);
  });

  it('Test Case #2', function() {
    const test = new LinkedList(0).addMany([1]);
    const result = reverseLinkList(test).getNodesInArray();
    const expected = new LinkedList(1).addMany([0]).getNodesInArray();
    expect(result).toEqual(expected);
  });

  it('Test Case #3', function() {
    const test = new LinkedList(0).addMany([1, 2]);
    const result = reverseLinkList(test).getNodesInArray();
    const expected = new LinkedList(2).addMany([1, 0]).getNodesInArray();
    expect(result).toEqual(expected);
  });

  it('Test Case #4', function() {
    const test = new LinkedList(0).addMany([1, 2, 3]);
    const result = reverseLinkList(test).getNodesInArray();
    const expected = new LinkedList(3).addMany([2, 1, 0]).getNodesInArray();
    expect(result).toEqual(expected);
  });

  it('Test Case #5', function() {
    const test = new LinkedList(0).addMany([1, 2, 3, 4]);
    const result = reverseLinkList(test).getNodesInArray();
    const expected = new LinkedList(4).addMany([3, 2, 1, 0]).getNodesInArray();
    expect(result).toEqual(expected);
  });

  it('Test Case #6', function() {
    const test = new LinkedList(0).addMany([1, 2, 3, 4, 5]);
    const result = reverseLinkList(test).getNodesInArray();
    const expected = new LinkedList(5).addMany([4, 3, 2, 1, 0]).getNodesInArray();
    expect(result).toEqual(expected);
  });

  it('Test Case #7', function() {
    const test = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    const result = reverseLinkList(test).getNodesInArray();
    const expected = new LinkedList(12).addMany([11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]).getNodesInArray();
    expect(result).toEqual(expected);
  });

});