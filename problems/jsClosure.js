function jsClosure(str, arg = []) {
  if (str) {
    return (nextStr) => jsClosure(nextStr, [...arg, str]);
  } else {
    return arg.join(' ');
  }
}

console.log(jsClosure('Hello')('World')(',')('testing')('...')('1')('2')('3')());