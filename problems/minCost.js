'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}



/*
 * Complete the 'minCost' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts WEIGHTED_INTEGER_GRAPH g as parameter.
 */

/*
 * For the weighted graph, <name>:
 *
 * 1. The number of nodes is <name>Nodes.
 * 2. The number of edges is <name>Edges.
 * 3. An edge exists between <name>From[i] and <name>To[i]. The weight of the edge is <name>Weight[i].
 *
 */

function minCost(gNodes, gFrom, gTo, gWeight) {
  console.log('gNodes', gNodes)
  console.log('gFrom', gFrom)
  console.log('gTo', gTo)
  console.log('gWeight', gWeight)

    // assign wieght to lowest_cost if direct link
    // return 1 if no direct link

    // BFS or pre-order DFS and return lowest cost
        // visited hash: with node # and lowest weight cost so far
        // if not visited, visit it and add adjacent vertices to queue/stack
        // if visited, compare lowest cost and reduce to lowest cost


    // return min(lowest_cost or hash[lowest_cost])
}

function main() {