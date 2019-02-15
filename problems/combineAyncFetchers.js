// Helper to generate random lag between 0 and 1000ms
const randomLag = (magnitude = 1000) => Math.random() * magnitude;

const randomFailureBoolean = (probability = 25) => {
  return Math.random() * 100 < probability;
};

// Function to generate a fetcher
const fetcher = (queryStr) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (randomFailureBoolean()) {
        reject(`error has occured with ${queryStr[0]}`);
      } else {
        resolve(queryStr);
      }
    }, randomLag());
  });
};

// Create a couple fetchers 
const fetcherA = (queryStr) => fetcher(('A: ' + queryStr));
const fetcherB = (queryStr) => fetcher(('B: ' + queryStr));
const fetcherC = (queryStr) => fetcher(('C: ' + queryStr));

// Custom function that mimics Promise.all but with custom resolved fetchers
function combineAsyncFetchers(queryStr, fetchers, cb, nResolved = null, timeOut = 750) {

  const responses = [];
  let resolvedFetchersCount = 0;
  let timedOut = false;
  nResolved = nResolved || fetchers.length; // Else default to Promise.all

  // Perform async call to each fetcher
  fetchers.forEach((iFetcher) => {
    iFetcher(queryStr)
      // If the fetcher response successfully, increment resolved count and push res to responses array
      .then((res) => {
        resolvedFetchersCount++;
        
        responses.push(res);
        if (resolvedFetchersCount === nResolved && !timedOut) { // Can be tweak to return when n fetchers resolve async.
          responses.forEach(response => cb(response));
          console.log('-------------------------');
        }
      })

      // If the fetcher response fails, push error to responses array
      .catch((err) => {
        responses.push(err);
        if (resolvedFetchersCount === nResolved && !timedOut) {
          responses.forEach(response => cb(response));
          console.log('-------------------------');
        }
      });
  });

  // Return early if time out count down has elapsed even if nResolved is not reached.
  setTimeout(() => {
    timedOut = true;
    if (resolvedFetchersCount < nResolved && timedOut) { // Can be tweak to return when n fetchers resolve async.
      console.log('TIMED OUT');
      responses.forEach(response => cb(response));
      console.log('-------------------------');
    }
  }, timeOut);
}

// combineAsyncFetchers example
const fetchers = [fetcherA, fetcherB, fetcherC];
// combineAsyncFetchers('hello from combineAsyncFetchers', fetchers, (res) => console.log(res));
// combineAsyncFetchers('hello from combineAsyncFetchers', fetchers, (res) => console.log(res), 2);
// combineAsyncFetchers('hello from combineAsyncFetchers', fetchers, (res) => console.log(res), 1);

// This test should see a combination of:
  // 1. Returned 2 successful response and up to 1 error;
  // 2. Timed out early, less than 2 successful response and up to 3 errors;
for (let i = 0; i < 10; i++) {
  combineAsyncFetchers('hello from combineAsyncFetchers', fetchers, (res) => console.log(res), 2);
}








// Promise.all example
// const fetchersPromiseAll = [fetcherA('hello from Promise.all'), fetcherB('hello from Promise.all'), fetcherC('hello from Promise.all')];
// Promise.all(fetchersPromiseAll).then((responses) => {
//   responses.forEach(response => console.log(response));
// });

// Promise.race example
// const fetchersPromiseRace = [fetcherA('hello from Promise.race'), fetcherB('hello from Promise.race'), fetcherC('hello from Promise.race')];
// Promise.race(fetchersPromiseRace).then((response) => console.log(response));