// Is any permutation of strB a subset of strA?

class CharacterCounts {
  constructor(str) {
    this.counts = {};
    this.queue = [];
  
    str.split("").forEach((char) => {
      this.addChar(char);
    });    
  }

  addChar(char) {
    if (!this.counts[char]) { this.counts[char] = 0; }
    this.counts[char] = this.counts[char] + 1;
    this.queue.push(char);
  }

  removeChar() {
    const removedChar = this.queue.shift();
    this.counts[removedChar] -= 1;
    if (this.counts[removedChar] === 0) {delete this.counts[removedChar];}
  }

  equals(otherCharacterCounts) {
    if (this.queue.length !== otherCharacterCounts.queue.length) return false;

    for (let char in this.counts) {
      if (this.counts[char] !== otherCharacterCounts.counts[char]) return false;
    }

    return true;
  }
}

