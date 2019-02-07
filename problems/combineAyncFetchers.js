
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

const fetcherA = (queryStr) => fetcher(('A: ' + queryStr));
const fetcherB = (queryStr) => fetcher(('B: ' + queryStr));
const fetcherC = (queryStr) => fetcher(('C: ' + queryStr));

const combineAsyncFetchers = (queryStr, fetchers, cb) => {
  const responses = [];
  let pendingFetchersCount = fetchers.length;

  fetchers.forEach((iFetcher) => {
    iFetcher(queryStr).then(res => {
      responses.push(res);
      pendingFetchersCount--;
      if (pendingFetchersCount === 0) { 
        responses.forEach(response => cb(response));
      }
    });
  });
};

const fetchers = [fetcherA, fetcherB, fetcherC];
combineAsyncFetchers('hello', fetchers, (res) => console.log(res));