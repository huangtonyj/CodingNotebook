
const randomLag = (magnitude = 1000) => {
  return Math.random() * magnitude;
};

const fetcher = (queryStr) => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(queryStr);
    }, randomLag());
  });
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
