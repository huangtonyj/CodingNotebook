/*
  There are a total of n courses you have to take labelled from 0 to n - 1.

  Some courses may have prerequisites, for example, if prerequisites[i] = [ai, bi] this means you must take the course bi before the course ai.

  Given the total number of courses numCourses and a list of the prerequisite pairs, return the ordering of courses you should take to finish all courses.

  If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

  

  Example 1:

  Input: numCourses = 2, prerequisites = [[1,0]]
  Output: [0,1]
  Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
  Example 2:

  Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
  Output: [0,2,1,3]
  Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
  So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
  Example 3:

  Input: numCourses = 1, prerequisites = []
  Output: [0]
*/

function findCourseSchedule(numCourses, prerequisites) {
  const [graph, reverseGraph] = _createReverseGraph(numCourses, prerequisites);

  return _topologicalSearch(graph, reverseGraph);
}

function _createReverseGraph(numCourses, prerequisites) {
  const graph = [...Array(numCourses)].map(_ => new Set());
  const reverseGraph = [...Array(numCourses)].map(_ => new Set());
  
  for (const [a, b] of prerequisites) {
    graph[b].add(a);
    reverseGraph[a].add(b);
  }
  
  return [graph, reverseGraph];
}

function _topologicalSearch(graph, reverseGraph) {
  const result = [];
  let independentNode = _findIndependentNode(reverseGraph);
  
  while (independentNode !== null) {
    const dependencies = graph[independentNode];
    
    for (const dependency of Array.from(dependencies)) {
      reverseGraph[dependency].delete(independentNode);
    }
    
    result.push(independentNode);
    reverseGraph[independentNode].add(true); // make it non independentNode
    independentNode = _findIndependentNode(reverseGraph);
  }
  
  return result.length === graph.length ? result : [];
}

function _findIndependentNode(reverseGraph) {
  for (let i = 0; i < reverseGraph.length; i++) {
    if (reverseGraph[i].size === 0) return i;
  }
  
  return null;
}