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

function stringPermutationSubset(strA, strB) {
  const CountsAWindowed = new CharacterCounts(strA.slice(0, strB.length));
  const countsB = new CharacterCounts(strB);
  let ans = false;

  if (CountsAWindowed.equals(countsB)) ans = true;

  strA.slice(strB.length).split("").forEach((char) => {
    CountsAWindowed.removeChar();
    CountsAWindowed.addChar(char);
    if (CountsAWindowed.equals(countsB)) ans = true;
  });

  return ans;
}
