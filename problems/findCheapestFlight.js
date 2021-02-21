// ***
/* eslint-disable no-loop-func */
/*

  You are given a huge list of airline ticket prices between different cities around the world on a given day. 
  These are all direct flights. Each element in the list has the format (source_city, destination, price).

  Consider a user who is willing to take up to k connections from their origin city A to their destination B. 
  Find the cheapest fare possible for this journey and print the itinerary for that journey.

  For example, our traveler wants to go from JFK to LAX with up to 3 connections, 
  and our input flights are as follows:

  [
      ('JFK', 'ATL', 150),
      ('ATL', 'SFO', 400),
      ('ORD', 'LAX', 200),
      ('LAX', 'DFW', 80),
      ('JFK', 'HKG', 800),
      ('ATL', 'ORD', 90),
      ('JFK', 'LAX', 500),
  ]
  Due to some improbably low flight prices, the cheapest itinerary would be 
  JFK -> ATL -> ORD -> LAX, costing $440.

*/

const flights = [
  ['JFK', 'ATL', 150],
  ['ATL', 'SFO', 400],
  ['ORD', 'LAX', 200],
  ['LAX', 'DFW', 80],
  ['JFK', 'HKG', 800],
  ['ATL', 'ORD', 90],
  ['JFK', 'LAX', 500],
];

const connections = {};

flights.forEach(([origin, destination, price]) => {
  if (!connections[origin]) { connections[origin] = {}; }

  connections[origin][destination] = price;
});

function findCheapestFlight(origin, destination, maxConnection = 3) {
  const bfsQueue = [{itinerary: [origin], total: 0}];
  const visited = {};

  while (bfsQueue.length) {
    const current = bfsQueue.shift();
    const currentItinerary = current.itinerary;
    const currentConnection = currentItinerary[currentItinerary.length - 1];
    const currentTotal = current.total;
    const nextConnections = connections[currentConnection] && Object.entries(connections[currentConnection]);

    // console.table({
    //   currentItinerary,
    //   currentConnection,
    //   currentTotal,
    //   nextConnections
    // });

    if (currentItinerary.length > maxConnection || !nextConnections) continue;

    nextConnections.forEach(([nextConnection, nextPrice]) => {
      const nextItinerary = [...currentItinerary, nextConnection];
      const nextTotal = currentTotal + nextPrice;

      if (!visited[nextConnection] || visited[nextConnection].total > nextTotal) {
        const next = {
          itinerary: nextItinerary,
          total: nextTotal
        };

        visited[nextConnection] = next;
        bfsQueue.push(next);
      }
    });

    // console.log(visited);
  }

  return visited[destination];
}

console.log(
  findCheapestFlight('JFK', 'LAX'), 'JFK -> ATL -> ORD -> LAX costing $440'
);