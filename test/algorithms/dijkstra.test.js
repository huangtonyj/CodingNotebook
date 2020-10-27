const Graph = require('../../dataStructures/Graph');
// const dijkstra = require('../../algorithms/dijkstra');
  
test('dijkstra()', () => {
  const myGraph1 = new Graph(
    // https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif
    {
      'A': {
        'B': 7,
        'C': 9,
        'F': 14,
      },
      'B': {
        'A': 7,
        'C': 10,
        'D': 15,
      },
      'C': {
        'A': 9,
        'B': 10,
        'D': 11,
        'F': 2,
      },
      'D': {
        'B': 15,
        'C': 11,
        'E': 6,
      },
      'E': {
        'D': 6,
        'F': 9,
      },
      'F': {
        'A': 14,
        'C': 2,
        'E': 9,
      },
    }
  );

  const myGraph2 = new Graph(
    // https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/
    {
      'A': {
        'B': 4,
        'H': 8,
      },
      'B': {
        'A': 4,
        'C': 8,
        'H': 11,
      },
      'C': {
        'B': 8,
        'D': 7,
        'F': 4,
        'I': 2,
      },
      'D': {
        'C': 7,
        'E': 9,
        'F': 14,
      },
      'E': {
        'D': 9,
        'F': 10,
      },
      'F': {
        'C': 4,
        'D': 14,
        'E': 10,
        'G': 2,
      },
      'G': {
        'F': 2,
        'H': 1,
        'I': 6,
      },
      'H': {
        'A': 8,
        'G': 1,
        'I': 7,
      },
      'I': {
        'C': 2,
        'G': 6,
        'H': 7,
      },
    }
  );

  expect(myGraph1.dijkstra('A')).toEqual({
    A: 0,
    B: 7,
    C: 9,
    D: 20,
    E: 20,
    F: 11
  });

  expect(myGraph2.dijkstra('A')).toEqual({
    A: 0,
    B: 4,
    C: 12,
    D: 19,
    E: 21,
    F: 11,
    G: 9,
    H: 8,
    I: 14
  });
});

