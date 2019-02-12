function zigZagPrint(str, k) {

  let result = [];
  while(result.push([]) < k);
  
  let direction = -1;
  let row = 0;

  for (let i = 0; i < str.length; i++) {
    result.forEach((resultRow, resultRowIdx) => {
      if (resultRowIdx !== row) {
        resultRow.push(' ');
      } else {
        resultRow.push(str[i]);
      }
    });


    if (row === 0 || row === k - 1) { direction *= -1; }
    row += direction;
  }

  result.forEach(thisRow => console.log(thisRow.join("")));
}

zigZagPrint('thisisazigzag', 4);

// t     a     g
//  h   s z   a
//   i i   i z
//    s     g