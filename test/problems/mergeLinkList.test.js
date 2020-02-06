const mergeLinkList = require('../../problems/mergeLinkList');

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

describe('mergeLinkList()', () => {
  it('Test Case #1', function () {
    const list1 = new LinkedList(1).addMany([2, 3, 4, 5]);
    const list2 = new LinkedList(6).addMany([7, 8, 9, 10]);
    const output = mergeLinkList(list1, list2);
    const expectedNodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(output.getNodesInArray()).toEqual(expectedNodes);
  });

  it('Test Case #2', function () {
    const list1 = new LinkedList(6).addMany([7, 8, 9, 10]);
    const list2 = new LinkedList(1).addMany([2, 3, 4, 5]);
    const output = mergeLinkList(list1, list2);
    const expectedNodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(output.getNodesInArray()).toEqual(expectedNodes);
  });

  it('Test Case #3', function () {
    const list1 = new LinkedList(1).addMany([3, 5, 7, 9]);
    const list2 = new LinkedList(2).addMany([4, 6, 8, 10]);
    const output = mergeLinkList(list1, list2);
    const expectedNodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(output.getNodesInArray()).toEqual(expectedNodes);
  });

  it('Test Case #4', function () {
    const list1 = new LinkedList(2).addMany([6, 7, 8]);
    const list2 = new LinkedList(1).addMany([3, 4, 5, 9, 10]);
    const output = mergeLinkList(list1, list2);
    const expectedNodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(output.getNodesInArray()).toEqual(expectedNodes);
  });

  it('Test Case #5', function () {
    const list1 = new LinkedList(1).addMany([2, 3, 4, 5, 7, 8, 9, 10]);
    const list2 = new LinkedList(6);
    const output = mergeLinkList(list1, list2);
    const expectedNodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(output.getNodesInArray()).toEqual(expectedNodes);
  });

  it('Test Case #6', function () {
    const list1 = new LinkedList(6);
    const list2 = new LinkedList(1).addMany([2, 3, 4, 5, 7, 8, 9, 10]);
    const output = mergeLinkList(list1, list2);
    const expectedNodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(output.getNodesInArray()).toEqual(expectedNodes);
  });

  it('Test Case #7', function () {
    const list1 = new LinkedList(1);
    const list2 = new LinkedList(2);
    const output = mergeLinkList(list1, list2);
    const expectedNodes = [1, 2];
    expect(output.getNodesInArray()).toEqual(expectedNodes);
  });

  it('Test Case #8', function () {
    const list1 = new LinkedList(2);
    const list2 = new LinkedList(1);
    const output = mergeLinkList(list1, list2);
    const expectedNodes = [1, 2];
    expect(output.getNodesInArray()).toEqual(expectedNodes);
  });

  it('Test Case #9', function () {
    const list1 = new LinkedList(1).addMany([1, 1, 3, 4, 5, 5, 5, 5, 10]);
    const list2 = new LinkedList(1).addMany([1, 2, 2, 5, 6, 10, 10]);
    const output = mergeLinkList(list1, list2);
    const expectedNodes = [1, 1, 1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 5, 5, 6, 10, 10, 10];
    expect(output.getNodesInArray()).toEqual(expectedNodes);
  });
});