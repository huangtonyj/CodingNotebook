const findLoop = require('../../problems/findLoop');
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

  getNthNode(n) {
    let counter = 1;
    let current = this;
    while (counter < n) {
      current = current.next;
      counter++;
    }
    return current;
  }
}

describe('findLoop()', () => {

  it('Test Case #1', () => {
    const test1 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    test1.getNthNode(10).next = test1.getNthNode(1);
    expect(findLoop(test1)).toEqual(test1.getNthNode(1));
  });

  it('Test Case #2', () => {
    const test2 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    test2.getNthNode(10).next = test2.getNthNode(2);
    expect(findLoop(test2)).toEqual(test2.getNthNode(2));
  });

  it('Test Case #3', () => {
    const test3 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    test3.getNthNode(10).next = test3.getNthNode(3);
    expect(findLoop(test3)).toEqual(test3.getNthNode(3));
  });

  it('Test Case #4', () => {
    const test4 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    test4.getNthNode(10).next = test4.getNthNode(4);
    expect(findLoop(test4)).toEqual(test4.getNthNode(4));
  });

  it('Test Case #5', () => {
    const test5 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    test5.getNthNode(10).next = test5.getNthNode(5);
    expect(findLoop(test5)).toEqual(test5.getNthNode(5));
  });

  it('Test Case #6', () => {
    const test6 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    test6.getNthNode(10).next = test6.getNthNode(6);
    expect(findLoop(test6)).toEqual(test6.getNthNode(6));
  });

  it('Test Case #7', () => {
    const test7 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    test7.getNthNode(10).next = test7.getNthNode(7);
    expect(findLoop(test7)).toEqual(test7.getNthNode(7));
  });

  it('Test Case #8', () => {
    const test8 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    test8.getNthNode(10).next = test8.getNthNode(8);
    expect(findLoop(test8)).toEqual(test8.getNthNode(8));
  });

  it('Test Case #9', () => {
    const test9 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    test9.getNthNode(10).next = test9.getNthNode(9);
    expect(findLoop(test9)).toEqual(test9.getNthNode(9));
  });

  it('Test Case #10', () => {
    const test10 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    test10.getNthNode(10).next = test10.getNthNode(10);
    expect(findLoop(test10)).toEqual(test10.getNthNode(10));
  });

  it('Test Case #11', () => {
    const test11 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    test11.getNthNode(10).next = test11.getNthNode(0);
    expect(findLoop(test11)).toEqual(test11.getNthNode(0));
  });
});