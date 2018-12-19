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
  equals(grid) {}

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
    this.store.forEach(row => {
      row.map(fn);
    });
  }

  resize() {}

  set(row, col, value) {
    this.store[row][col] = value;
  }

  toString() {
    return this.store;
  }

}

module.exports = Grid;

const myGrid = new Grid(3, 4, null);
  console.log(myGrid.isEmpty(), true);
  myGrid.fill('hello');
  console.log(myGrid.toString(), [
    ['hello', 'hello', 'hello', 'hello'],
    ['hello', 'hello', 'hello', 'hello'],
    ['hello', 'hello', 'hello', 'hello']
  ]);
  console.log(myGrid.inBounds(3,4), true);
  console.log(myGrid.inBounds(4,4), false);
  console.log(myGrid.isEmpty(), false);
  myGrid.set(1,1,'hey');
  console.log(myGrid.get(1,1), 'hey');

  console.log(myGrid.toString());

  myGrid.mapAll((cell) => 'yo');
  console.log(myGrid.toString());