/*
  There is an undirected graph with n nodes, 
  where each node is numbered between 0 and n - 1. 
  You are given a 2D array graph, where graph[u] is an array of nodes that node u is adjacent to. 
  More formally, for each v in graph[u], there is an undirected edge between node u and node v. 
  
  The graph has the following properties:

    There are no self-edges (graph[u] does not contain u).
    There are no parallel edges (graph[u] does not contain duplicate values).
    If v is in graph[u], then u is in graph[v] (the graph is undirected).
    The graph may not be connected, meaning there may be two nodes u and v such that there is no path between them.
    A graph is bipartite if the nodes can be partitioned into two independent sets A and B such that every edge in the graph connects a node in set A and a node in set B.

  Return true if and only if it is bipartite.

  Example 1:
    Input: graph = [[1,2,3],[0,2],[0,1,3],[0,2]]
    Output: false
    Explanation: There is no way to partition the nodes into two independent sets such that every edge connects a node in one and a node in the other.

  Example 2:
    Input: graph = [[1,3],[0,2],[1,3],[0,2]]
    Output: true
    Explanation: We can partition the nodes into two sets: {0, 2} and {1, 3}.
*/


/*
  1) DFS and alternating mark each node.
  2) If a visited marked node is not the same as the alternating pattern, return false
*/

function isBipartite(graph) {
  const mark = new Array(graph.length).fill(0);

  for (let node = 0; node < graph.length; node++) {
    if (mark[node] !== 0) continue;

    const stack = [node];
    const markStack = [1];

    while (stack.length) {
      const current = stack.pop();
      const currentMark = markStack.pop();

      if (mark[current] !== 0 && mark[current] !== currentMark) {
        return false;
      } else if (mark[current] === 0) {
        const nexts = graph[current];

        mark[current] = currentMark;

        nexts.forEach((next) => {
          stack.push(next);
          markStack.push(currentMark * -1);
        });
      }
    }
  }

  return true;
}

// console.log(
//   isBipartite([
//     [1, 2, 3],
//     [0, 2],
//     [0, 1, 3],
//     [0, 2],
//   ]),
//   false,

//   isBipartite([
//     [1, 3],
//     [0, 2],
//     [1, 3],
//     [0, 2],
//   ]),
//   true,

//   isBipartite([
//     [1], [0, 3], [3], [1, 2]
//   ]),
//   true,
// );

