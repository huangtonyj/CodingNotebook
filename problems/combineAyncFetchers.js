
const randomLag = (magnitude = 1000) => {
  return Math.random() * magnitude;
};



// function combineFetchers(fetchers) {
//   const cbResult = [];
//   let pendingCount = fetchers.length;
//   return (str, cb) => {
//       fetchers.forEach(fetcher => fetcher(str, (res, err) => {
//             cbResult.push(res)) pendingCount--;
//           if (pendingCount === 0) {
//             cb(cbResult)
//           }
//         }
//       }


//       // errored callback
//       // callbacks from different fetchers

//     }
// }
