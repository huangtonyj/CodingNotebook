function minPipeCost(pipes) {
  const properties = {};
  Object.keys(pipes).forEach((property) => {
    properties[property] = {source: null, cost: Infinity};
  });
  properties.plant.cost = 0;

  Object.entries(pipes).forEach((pipeConnections) => {
    const [source, destinations] = pipeConnections;
    
    Object.entries(destinations).forEach((pipeDetails) => {
      const [dest, cost] = pipeDetails;
      if (properties[dest].cost > cost) {
        properties[dest] = {source, cost};
      }
    });
  });

  return properties;
}



const pipes = {
  'plant': {
    'A': 1,
    'B': 5,
    'C': 20
  },
  'A': {
    'C': 15
  },
  'B': {
    'C': 10
  },
  'C': {}
};

console.log(minPipeCost(pipes));