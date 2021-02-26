// ***
function topologicalSort(jobs, deps) {
  const result = [];
  const unVisitedJobs = new Set(jobs);
  const dependencyGraph = createDependencyGraph(deps);
  const prerequisiteGraph = createPrerequisiteGraph(deps);

  let independentNode = findIndependentNode(unVisitedJobs, dependencyGraph);
  
  while (independentNode !== null) {
    result.push(independentNode);

    const dependencies = prerequisiteGraph[independentNode] || [];

    dependencies.forEach(dependency => {
      delete dependencyGraph[dependency][independentNode];
    });

    delete prerequisiteGraph[independentNode];
    
    independentNode = findIndependentNode(unVisitedJobs, dependencyGraph);
  }

  return result.length === jobs.length ? result : [];
}

const createPrerequisiteGraph = (deps) => {
  const graph = {};
  
  deps.forEach(([to, from]) => {
    if (!graph[to]) graph[to] = [];
    graph[to].push(from);
  });

  return graph;
};

const createDependencyGraph = (deps) => {
  const graph = {};
  
  deps.forEach(([to, from]) => {
    if (!graph[from]) graph[from] = {};
    graph[from][to] = true;
  });

  return graph;
};

const findIndependentNode = (unVisitedJobs, dependencyGraph) => {
  for (const job of unVisitedJobs) {
    if (!dependencyGraph[job] || !Object.keys(dependencyGraph[job]).length) {
      unVisitedJobs.delete(job);
      return job;
    }
  }
  return null;
};

module.exports = topologicalSort;