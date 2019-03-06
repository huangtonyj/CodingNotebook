const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const question = (q) => {
  return new Promise((res, rej) => {
    rl.question(q, answer => res(answer));
  });
};

class Game {
  constructor() {
    this.playerX = new Player('playerX', 'X');
    this.playerO = new Player('playerO', 'O');
    this.currentPlayer = this.playerO;
    this.board = new Board();
    this.cellsLeft = 9;
    this.gameOverMessage = 'It is a DRAW';

    this.play();
  }

  async play() {
    while (!this.boardFilled() || !this.someoneWon()) {
      this.displayBoard();
      
      this.currentPlayer = (this.currentPlayer === this.playerX) ? this.playerO : this.playerX;
      
      const [r, c] = await this.currentPlayer.takeTurn();
      
      if (!this.board.validMove(r,c)) continue;
      
      this.board.mark(r, c, this.currentPlayer.marker);
      this.cellsLeft--;
    }
    
    this.displayGameOverMessage();
  }

  displayBoard() {
    console.clear()
    this.board.board.forEach(row => console.log(row.map(cell => cell.show)));
  }

  boardFilled() {
    if (this.cellsLeft === 0) {
      return true;
    }
    return false;
  }

  someoneWon() {
    const board = this.board.board;
    const lastMarker = this.currentPlayer.marker;
    
    const rowCheck = board.some(row => row.every(cell => cell.show === lastMarker));
    const diagonalCheck = 
    [board[0][0], board[1][1], board[2][2]].every(cell => cell.show === lastMarker) ||
    [board[0][2], board[1][1], board[2][0]].every(cell => cell.show === lastMarker);
    let columnCheck = false;
      for (let c = 0; c < 3; c++) {
        columnCheck = board.every(row => row[c].show === lastMarker) || columnCheck;
      }

    if (rowCheck || columnCheck || diagonalCheck) {
      this.gameOverMessage = `${this.currentPlayer.name} WINS`
      return true;
    }

    return false;
  }

  displayGameOverMessage() {
    rl.close();
    this.displayBoard();
    console.log(this.gameOverMessage);
  }
}

class Player {
  constructor(name, marker) {
    this.name = name;
    this.marker = marker;
  }

  async takeTurn() {
    console.log(`${this.name}'s turn`);

    const pos = await question('Select a cell (i.e. r, c): ');

    return pos.split(' ').map(char => parseInt(char));
  }
}

class Board {
  constructor() {
    this.board = [];
    this.populateBoard();
  }

  populateBoard() {
    while (this.board.length < 3) {
      const row = [];
      while (row.length < 3) {
        row.push(new Cell());
      }
      this.board.push(row);
    }
  }

  validMove(r, c) {
    if (r < 0 || c < 0) { return false; }
    if (r > 2 || c > 2) { return false; }
    console.log(this.board[r][c], r, c)
    if (this.board[r][c].marked) { return false; }
    return true;
  }

  mark(r, c, marker) {
    this.board[r][c].mark(marker);
  }
}

class Cell {
  constructor() {
    this.marked = false;
    this.show = "_";
  }

  mark(marker) {
    this.marked = true;
    this.show = marker;
  }
}

new Game();