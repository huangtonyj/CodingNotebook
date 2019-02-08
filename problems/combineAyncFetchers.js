// Helper to generate random lag between 0 and 1000ms
const randomLag = (magnitude = 1000) => {
  return Math.random() * magnitude;
};

const randomFailureBoolean = (probability = 5) => {
  return Math.random() * 100 < probability;
};

// Function to generate a fetcher
const fetcher = (queryStr) => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(queryStr);
    }, randomLag());
  });
};

// Create a couple fetchers 
const fetcherA = (queryStr) => fetcher(('A: ' + queryStr));
const fetcherB = (queryStr) => fetcher(('B: ' + queryStr));
const fetcherC = (queryStr) => fetcher(('C: ' + queryStr));

// Custom function that mimics Promise.all desired resolved fetchers
function combineAsyncFetchers(queryStr, fetchers, cb) {
  const responses = [];
  let pendingFetchersCount = 0;

  fetchers.forEach((iFetcher) => {
    iFetcher(queryStr).then(res => {
      responses.push(res);
      pendingFetchersCount++;
      if (pendingFetchersCount === fetchers.length) { // Can be tweak to return when n fetchers resolve async.
        responses.forEach(response => cb(response));
      }
    });
  });
}

// combineAsyncFetchers example
const fetchers = [fetcherA, fetcherB, fetcherC];
combineAsyncFetchers('hello from combineAsyncFetchers', fetchers, (res) => console.log(res));

// Promise.all example
const fetchersPromiseAll = [fetcherA('hello from Promise.all'), fetcherB('hello from Promise.all'), fetcherC('hello from Promise.all')];
Promise.all(fetchersPromiseAll).then((responses) => {
  responses.forEach(response => console.log(response));
});

// Promise.race example
const fetchersPromiseRace = [fetcherA('hello from Promise.race'), fetcherB('hello from Promise.race'), fetcherC('hello from Promise.race')];
Promise.race(fetchersPromiseRace).then((response) => console.log(response));