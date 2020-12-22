/*
  For the purpose of this question, the phrases "airport route" and "airport
  connection" are used interchangeably.

  You're given a list of airports (three-letter codes like "JFK"),
  a list of routes (one-way flights from one airport to another like
  ["JFK", "SFO"]), and a starting airport.

  Write a function that returns the minimum number of airport connections
  (one-way flights) that need to be added in order for someone to be able to
  reach any airport in the list, starting at the starting airport.

  Note that routes only allow you to fly in one direction; for instance,
  the route
  ["JFK", "SFO"] only allows you to fly from "JFK" to
  "SFO".

  Also note that the connections don't have to be direct; it's okay if an
  airport can only be reached from the starting airport by stopping at other
  airports first.
  
  Sample Input
    airports = [
      "BGI", "CDG", "DEL", "DOH", "DSM", "EWR", "EYW", "HND", "ICN",
      "JFK", "LGA", "LHR", "ORD", "SAN", "SFO", "SIN", "TLV", "BUD",
    ]

    routes = [
      ["DSM", "ORD"],
      ["ORD", "BGI"],
      ["BGI", "LGA"],
      ["SIN", "CDG"],
      ["CDG", "SIN"],
      ["CDG", "BUD"],
      ["DEL", "DOH"],
      ["DEL", "CDG"],
      ["TLV", "DEL"],
      ["EWR", "HND"],
      ["HND", "ICN"],
      ["HND", "JFK"],
      ["ICN", "JFK"],
      ["JFK", "LGA"],
      ["EYW", "LHR"],
      ["LHR", "SFO"],
      ["SFO", "SAN"],
      ["SFO", "DSM"],
      ["SAN", "EYW"],
    ]
  
    startingAirport = "LGA"
    
  Sample Output
    3 ["LGA", "TLV"], ["LGA", "SFO"], and ["LGA", "EWR"]
*/

function airportConnections(airports, routes, startingAirport) {
  // create adjanccy lists of possible destinations. BFS search
  // remove current reachable destination
  
  // loop thorugh and fly toward destination with most connection.
    // delete those connections

  let ans = [];
  const airportRoutes = {};

  for (const airport of airports) airportRoutes[airport] = [];

  for (const [origin, dest] of routes) {
    airportRoutes[origin].push(dest);
  }
    
  let queue = [startingAirport];

  while (queue.length) {
    const current = queue.shift();
    const nextConnections = airportRoutes[current] || [];
    delete airportRoutes[current];

    queue = [...queue, ...nextConnections];
  }

  while (Object.keys(airportRoutes).length > 0) {
    const [mostPopularAirport, mostPopularAirportConnections] = getMostPopularAirport(airports, airportRoutes);

    ans.push([startingAirport, mostPopularAirport]);

    for (const airport of mostPopularAirportConnections) {
      delete airportRoutes[airport];
    }
  }

  return ans;
}

function getMostPopularAirport(airports, airportRoutes) {
  const airportBFS = {};
  
  for (const airport of airports) {
    if (!airportRoutes[airport]) continue;
    
    const visited = new Set();
    let queue = [airport];
    airportBFS[airport] = [];

    while (queue.length) {
      const current = queue.shift();
      const nextConnections = airportRoutes[current] || [];
      
      if (!visited.has(current)) {
        visited.add(current);
        airportBFS[airport].push(current);
        queue = [...queue, ...nextConnections];
      }
    }
  }
  
  let mostPopularAirport;
  let mostPopularLength = 0;

  for (const [airport, bfsConnections] of Object.entries(airportBFS)) {
    if (bfsConnections.length >= mostPopularLength) {
      mostPopularLength = bfsConnections.length;
      mostPopularAirport = airport;
    }
  }

  const mostPopularAirportConnections = airportBFS[mostPopularAirport];

  return [mostPopularAirport, mostPopularAirportConnections];
}


const airports = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9',
  '10', '11', '12', '13', '14', '15', '16', '17', '18',
];

const routes = [
  ['5', '13'],
  ['13', '1'],
  ['1', '11'],
  ['16', '2'],
  ['2', '16'],
  ['2', '18'],
  ['3', '4'],
  ['3', '2'],
  ['17', '3'],
  ['6', '8'],
  ['8', '9'],
  ['8', '10'],
  ['9', '10'],
  ['10', '11'],
  ['7', '12'],
  ['12', '15'],
  ['15', '14'],
  ['15', '5'],
  ['14', '7'],
];
  
const startingAirport = '11';

console.log(airportConnections(airports, routes, startingAirport));
// ['11', '17'], ['11', '15'], and ['11', '6']