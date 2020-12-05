/*
  You're looking to move into a new apartment on specific street, and you're
  given a list of contiguous blocks on that street where each block contains an
  apartment that you could move into.

  You also have a list of requirements: a list of buildings that are important
  to you. For instance, you might value having a school and a gym near your
  apartment. The list of blocks that you have contains information at every
  block about all of the buildings that are present and absent at the block in
  question. For instance, for every block, you might know whether a school, a
  pool, an office, and a gym are present.

  In order to optimize your life, you want to pick an apartment block such that
  you minimize the farthest distance you'd have to walk from your apartment to
  reach any of your required buildings.

  Write a function that takes in a list of contiguous blocks on a specific
  street and a list of your required buildings and that returns the location
  (the index) of the block that's most optimal for you.

  If there are multiple most optimal blocks, your function can return the index
  of any one of them.

  Sample Input
    blocks = [
      {
        "gym": false,
        "school": true,
        "store": false,
      },
      {
        "gym": true,
        "school": false,
        "store": false,
      },
      {
        "gym": true,
        "school": true,
        "store": false,
      },
      {
        "gym": false,
        "school": true,
        "store": false,
      },
      {
        "gym": false,
        "school": true,
        "store": true,
      },
    ]

    reqs = ["gym", "school", "store"]

  Sample Output
    3 // at index 3, the farthest you'd have to walk to reach a gym, a school, or a store is 1 block; at any other index, you'd have to walk farther
*/

function apartmentHunting(blocks, reqs) {
  const blockReqMatrix = [...Array(blocks.length)].map(r => Array(reqs.length).fill(Infinity));
  const reqIndices = {};

  reqs.forEach((req, idx) => {
    reqIndices[req] = idx;
  });

  // Assign distance of 0 if req is in the block.
  for (let i = 0; i < blocks.length; i++) {
    const currentBlock = blocks[i];

    Object.entries(currentBlock).forEach(([req, hasReq]) => {
      if (hasReq) blockReqMatrix[i][reqIndices[req]] = 0;
    });
  }

  // If req is in prev block, take min of current and prev block + 1
  for (let i = 1; i < blockReqMatrix.length; i++) {
    const prevBlock = blockReqMatrix[i - 1];
    const currentBlock = blockReqMatrix[i];

    blockReqMatrix[i] = currentBlock.map((el, idx) => {
      return Math.min(el, prevBlock[idx] + 1);
    });
  }

  // If req is in next block, take min of current and next block + 1
  for (let i = blockReqMatrix.length - 2; i >= 0; i--) {
    const nextBlock = blockReqMatrix[i + 1];
    const currentBlock = blockReqMatrix[i];

    blockReqMatrix[i] = currentBlock.map((el, idx) => {
      return Math.min(el, nextBlock[idx] + 1);
    });
  }

  // Figure out distance of furthest req.
  const results = blockReqMatrix.map((block) => {
    return Math.max(...block);
  });

  // Find best block
  const min = Math.min(...results);

  return results.indexOf(min);
}

// console.log(
//   apartmentHunting([
//       {"gym": false, "school": true, "store": false,},
//       {"gym": true, "school": false, "store": false,},
//       {"gym": true, "school": true, "store": false,},
//       {"gym": false, "school": true, "store": false,},
//       {"gym": false, "school": true, "store": true,},
//     ], ["gym", "school", "store"]) === 3,

//   apartmentHunting([
//     {"gym": false, "office": true, "school": true, "store": false},
//     {"gym": true, "office": false, "school": false, "store": false},
//     {"gym": true, "office": false, "school": true, "store": false},
//     {"gym": false, "office": false, "school": true, "store": false},
//     {"gym": false, "office": false, "school": true, "store": false},
//     {"gym": false, "office": false, "school": true, "store": true}
//   ], ["gym", "office", "school", "store"]) === 2,

//   apartmentHunting([
//     {"gym": true, "office": false, "pool": false, "school": true, "store": false},
//     {"gym": false, "office": false, "pool": false, "school": false, "store": false},
//     {"gym": false, "office": true, "pool": false, "school": true, "store": false},
//     {"gym": false, "office": true, "pool": false, "school": false, "store": false},
//     {"gym": false, "office": false, "pool": false, "school": false, "store": true},
//     {"gym": true, "office": true, "pool": false, "school": false, "store": false},
//     {"gym": false, "office": false, "pool": true, "school": false, "store": false},
//     {"gym": false, "office": false, "pool": false, "school": false, "store": false},
//     {"gym": false, "office": false, "pool": false, "school": false, "store": false},
//     {"gym": false, "office": false, "pool": false, "school": true, "store": false},
//     {"gym": false, "office": false, "pool": true, "school": false, "store": false}
//   ], ["gym", "pool", "school", "store"]) === 4,
// );