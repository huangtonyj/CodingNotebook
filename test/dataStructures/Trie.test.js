const Trie = require('../../dataStructures/Trie');

// a:
//   *: true
//   n:
//     s:
//       w:
//         e:
//           r:
//             *: true
//     y:
//       *: true
// b:
//   y:
//     e:
//       *: true
//     *: true
// t:
//   h:
//     e:
//       i:
//         r:
//           *: true
//     *: true
//       r:
//         e:
//           *: true

describe('Trie()', () => {
  const dictionary = [
    "the",
    "a",
    "there",
    "answer",
    "any",
    "by",
    "bye",
    "their"
  ];
  const myTrie = new Trie();
  dictionary.forEach((word) => myTrie.insert(word));

  test('Test valid words', function () {
    dictionary.forEach(word => expect(myTrie.contains(word)).toEqual(true));
  });

  test('Test invalid words', function () {
    expect(myTrie.contains('th')).toEqual(false);
    expect(myTrie.contains('notAWord')).toEqual(false);
    expect(myTrie.contains('these')).toEqual(false);
    expect(myTrie.contains('thaw')).toEqual(false);
  });  
});

