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
  let count = 0;

  const connections = {};

  airports.forEach((airport) => {
    connections[airport] = {};
  });

  routes.forEach(([origin, destination]) => {
    connections[origin][destination] = 1;
  });

  console.log(connections);

  const connections2 = {};

  airports.forEach((airport) => {
    connections2[airport] = {};
  });

  routes.forEach(([origin, destination]) => {
    connections2[destination][origin] = 1;
  });

  let next = findAirport(connections2);

  while (next) {
    // console.log(next, connections2);

    count++;
    delete connections2[next];
    
    const destinations = Object.keys(connections[next]);
    destinations.forEach((destination) => {
      delete connections2[destination][next];
    });
    // console.log(next, destinations);

    // console.log(count, connections2, next);

    next = findAirport(connections2, count);
  }

  // return connections;
  return connections2;
}

function findAirport(connections2) {
  for (const [destination, origins] of Object.entries(connections2)) {
    if (Object.keys(origins).length === 0) return destination;
  }

  const next = Object.keys(connections2)[0];

  if (next === "BGI") console.log(connections2);

  return next || null;
}

const airports = [
  "BGI", "CDG", "DEL", "DOH", "DSM", "EWR", "EYW", "HND", "ICN",
  "JFK", "LGA", "LHR", "ORD", "SAN", "SFO", "SIN", "TLV", "BUD",
];

const routes = [
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
];
  
const startingAirport = "LGA";

console.log(airportConnections(airports, routes, startingAirport));

// const a = findAirport({
//   BGI: { ORD: 1 },
//   CDG: { SIN: 1, DEL: 1 },
//   DEL: { TLV: 1 },
//   DOH: { DEL: 1 },
//   DSM: { SFO: 1 },
//   EWR: {},
//   EYW: { SAN: 1 },
//   HND: { EWR: 1 },
//   ICN: { HND: 1 },
//   JFK: { HND: 1, ICN: 1 },
//   LGA: { BGI: 1, JFK: 1 },
//   LHR: { EYW: 1 },
//   ORD: { DSM: 1 },
//   SAN: { SFO: 1 },
//   SFO: { LHR: 1 },
//   SIN: { CDG: 1 },
//   TLV: {},
//   BUD: { CDG: 1 }
// });