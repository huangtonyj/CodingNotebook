/*
  Calling an API but only less than 2x every 5 seconds.
*/

class PrevTimeQueues {
	constructor(maxCalls) {
    this.maxCalls = maxCalls;
		this.arr = [];
	}

	getFirstTime() {
		return this.arr[0];
  }

	enqueue(time) {
		this.arr.push(time);
    console.log('enqueue', this.arr, this.maxCalls);
		if (this.arr.length > this.maxCalls) this.dequeue();
	}

	dequeue() {
		this.arr.shift();
  }
}

function apiCallLimit(n, t, fn, prevTimeQueues) {
  if (!prevTimeQueues) prevTimeQueues = new PrevTimeQueues(n);

	const firstOne = prevTimeQueues.getFirstTime();
	const currentTime = Date.now();
  console.log(currentTime);

	if (!firstOne || (currentTime - firstOne) > (t * 1000)) {
		prevTimeQueues.enqueue(currentTime);
		fn();
  }

  // apiCallLimit(n, t, fn, prevTimeQueues);

  // simulate lagg in computing cycle
  const randomTimeout = Math.random() * 5000; 

  setTimeout(() => {
    apiCallLimit(n, t, fn, prevTimeQueues);
  }, randomTimeout);
}

function callAPI() {
  console.log('hi');
}


apiCallLimit(2, 5, callAPI);