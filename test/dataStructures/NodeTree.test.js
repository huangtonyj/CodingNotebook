const NodeTree = require('../../dataStructures/NodeTree');

describe('NodeTree', () => {
  const test1 = new NodeTree('A');
  test1.addChild('B').addChild('C');
  test1.children[0].addChild('D');

  const test2 = new NodeTree('A');
  test2
    .addChild('B')
    .addChild('C')
    .addChild('D')
    .addChild('E');
  test2.children[1].addChild('F');

  const test3 = new NodeTree('A');
  test3.addChild('B');
  test3.children[0].addChild('C');
  test3.children[0].children[0].addChild('D').addChild('E');
  test3.children[0].children[0].children[0].addChild('F');

  const test4 = new NodeTree('A');
  test4
    .addChild('B')
    .addChild('C')
    .addChild('D');
  test4.children[0].addChild('E').addChild('F');
  test4.children[2].addChild('G').addChild('H');
  test4.children[0].children[1].addChild('I').addChild('J');
  test4.children[2].children[0].addChild('K');

  const test5 = new NodeTree('A');
  test5
    .addChild('B')
    .addChild('C')
    .addChild('D')
    .addChild('L')
    .addChild('M');
  test5.children[0]
    .addChild('E')
    .addChild('F')
    .addChild('O');
  test5.children[1].addChild('P');
  test5.children[2].addChild('G').addChild('H');
  test5.children[0].children[0].addChild('Q').addChild('R');
  test5.children[0].children[1].addChild('I').addChild('J');
  test5.children[2].children[0].addChild('K');
  test5.children[4]
    .addChild('S')
    .addChild('T')
    .addChild('U')
    .addChild('V');
  test5.children[4].children[0].addChild('W').addChild('X');
  test5.children[4].children[0].children[1].addChild('Y').addChild('Z');

  describe('breadthFirstSearch()', () => {

    test('Test Case #1', () => {
      expect(test1.breadthFirstSearch([])).toEqual(['A', 'B', 'C', 'D']);
    });

    test('Test Case #2', () => {
      expect(test2.breadthFirstSearch([]))
        .toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
    });

    test('Test Case #3', () => {
      expect(test3.breadthFirstSearch([]))
        .toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
    });

    test('Test Case #4', () => {
      expect(test4.breadthFirstSearch([]))
        .toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']);
    });

    test('Test Case #5', () => {
      expect(test5.breadthFirstSearch([]))
        .toEqual([
          'A',
          'B',
          'C',
          'D',
          'L',
          'M',
          'E',
          'F',
          'O',
          'P',
          'G',
          'H',
          'S',
          'T',
          'U',
          'V',
          'Q',
          'R',
          'I',
          'J',
          'K',
          'W',
          'X',
          'Y',
          'Z'
        ]);
    });
  });
});


