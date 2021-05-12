function sum1() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

function sum2(...nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }

  return total;
}

Function.prototype.myBind1 = function (ctx) {
  const fn = this;
  const bindArgs = Array.from(arguments).slice(1);
  return function _boundFn() {
    const callArgs = Array.from(arguments);
    return fn.apply(ctx, bindArgs.concat(callArgs));
  };
};

Function.prototype.myBind2 = function (ctx, ...bindArgs) {
  return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs));
};

function curriedSum(numArgs) {
  const numbers = [];

  function _curriedSum(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      let total = 0;

      numbers.forEach((n) => {
        total += n;
      });

      return total;
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}

// using spread
Function.prototype.curry = function (numArgs) {
  const args = [];
  const fn = this;

  function _curriedFn(arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return fn(...args);
    } else {
      return _curriedFn;
    }
  }

  return _curriedFn;
};

// using apply
Function.prototype.curry1 = function (numArgs) {
  const args = [];
  const fn = this;

  function _curriedFn(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return fn.apply(null, args);
    } else {
      return _curriedFn;
    }
  }
  return _curriedFn;
};

/**
 * With ES6 arrow functions
 * Notice we dont need to keep track of the `this` context (const fn = this).
 * An arrow function does not have its own `this`, 
 * the `this` value of the enclosing execution context is used.
 */
Function.prototype.curry2 = function (numArgs) {
  const args = [];
  const _curriedFn = (arg) => {
    args.push(arg);
    if (args.length === numArgs) {
      // spreading the array into individual arguments
      return this(...args);
    } else {
      return _curriedFn;
    }
  };
  return _curriedFn;
};

const mySum3 = sum2.curry(3);
console.log(mySum3(1)(2)(3));



// https://javascript.info/currying-partials

function curry(f) { // curry(f) does the currying transform
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

// usage
function sum(a, b) {
  return a + b;
}

let curriedSum2 = curry(sum);

console.log(curriedSum2(1)(2)); // 3






function advanceCurry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function sum3(a, b, c) {
  return a + b + c;
}

let curriedSum3 = advanceCurry(sum3);

console.log( curriedSum(1, 2, 3) ); // 6, still callable normally
console.log( curriedSum(1)(2,3) ); // 6, currying of 1st arg
console.log( curriedSum(1)(2)(3) ); // 6, full currying