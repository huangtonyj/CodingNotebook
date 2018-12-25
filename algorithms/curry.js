function currySum2 (num1) {
  return (num2) => {
    return num1 + num2;
  };
}

console.log(currySum2(2)(3));
console.log(currySum2(2)(5));
