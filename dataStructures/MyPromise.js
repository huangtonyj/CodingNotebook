class MyPromise {
    constructor(resolver) {
        this.isResolved = false;
        this.resolvedValue;
        this.queuedThenFns = [];

        resolver((resolvedOutput) => {
            this.isResolved = true;
            this.resolvedValue = resolvedOutput;

            for (queuedThenFn of queuedThenFns) {
                queuedThenFn(resolvedOutput);
            }
        });
    }

    then(fn) {
        if (this.isResolved) {
            fn(this.resolvedValue);
        } else {
            this.queuedThenFns.push(fn);
        }

        return new MyPromise(fn);
    }
}

const myPromise = new Promise((resolve) => {
    // resolve(1);
    setTimeout(() => resolve(1), 100);
})

myPromise.then((value) => {
    console.log(`Value in then #1 is ${value}`);

    return value + 1;
}).then((value) => {
    console.log(`Value in then #2 is ${value}`);

    return value + 1;
}).then((value) => {
    console.log(`Value in then #3 is ${value}`);

    return value + 1;
});

myPromise.then((value) => {
    console.log(`Value in then #1 is ${value}`);

    return value + 1;
});