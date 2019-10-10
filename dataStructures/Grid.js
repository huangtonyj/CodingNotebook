class Grid {
  constructor(row, col, value = null) {
    this.store = [...Array(row)].map(r => Array(col).fill(value));

    this.height = row;
    this.width = col;
    this.numRows = row;
    this.numCols = col;
    this.size = row * col;
  }

  // check if two grids are equal in value
  equals(grid) {
    if (this.height !== grid.height) { return false; }
    if (this.width !== grid.width) { return false; }

    let ans = true;
    for (let r = 0; r < this.height; r++) {
      for (let c = 0; c < this.width; c++) {
        if (this.get(r,c) !== grid.get(r,c)) { ans = false; }
      }
    }
    return ans;
  }

  // fill entire grid with value
  fill(value) {
    this.store.forEach((row) => {
      row.fill(value);
    });
  }

  // get value of row, col
  get(row, col) {
    return this.store[row][col];
  }

  inBounds(row, col) {
    if (!(row >= 0 && row <= this.height)) { return false; }
    if (!(col >= 0 && col <= this.width)) { return false; }
    return true;
  }

  isEmpty() {
    let ans = true;
    this.store.forEach((row) => {
      if (row.some((el) => el !== null)) { 
        ans = false; 
        return;
      }
    });
    return ans;
  }

  mapAll(fn) {
    for (let i = 0; i < this.height; i++) {
      this.store[i] = this.store[i].map(fn);
    }
  }

  set(row, col, value) {
    this.store[row][col] = value;
  }

  toString() {
    return this.store;
  }

}

module.exports = Grid;

// const myGrid = new Grid(3, 4);
//   console.log(myGrid.isEmpty(), true);
//   myGrid.fill('hello');
//   console.log(myGrid.toString(), [
//     ['hello', 'hello', 'hello', 'hello'],
//     ['hello', 'hello', 'hello', 'hello'],
//     ['hello', 'hello', 'hello', 'hello']
//   ]);
//   console.log(myGrid.inBounds(3,4), true);
//   console.log(myGrid.inBounds(4,4), false);
//   console.log(myGrid.isEmpty(), false);

//   myGrid.set(1,1,'hey');
//   console.log(myGrid.get(1,1), 'hey');
//   console.log(myGrid.toString(),
//     [['hello', 'hello', 'hello', 'hello'],
//       ['hello', 'hey', 'hello', 'hello'],
//       ['hello', 'hello', 'hello', 'hello']]);

//   myGrid.mapAll((cell) => 'yo');
//   console.log(myGrid.toString(), 
//     [['yo', 'yo', 'yo', 'yo'],
//     ['yo', 'yo', 'yo', 'yo'],
//     ['yo', 'yo', 'yo', 'yo']]);

// const myGrid2 = new Grid(3, 5);
//   console.log(myGrid.equals(myGrid2), false);

// const myGrid3 = new Grid(3, 4, 'yo');
//   console.log(myGrid.equals(myGrid3), true);