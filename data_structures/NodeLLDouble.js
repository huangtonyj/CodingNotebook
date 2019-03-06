class NodeLLDouble {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  insert(value) {
    this.next = new NodeLLDouble(value);
    this.next.prev = this;
    return this.next;
  }
}

module.exports = NodeLLDouble;

// Test for insert chaining method
// const myLL = new NodeLLDouble(1);
//   myLL
//     .insert(2)
//     .insert(3)
//     .insert(4)
//     .insert(5)
//     .insert(6)
//     .insert(7)
//     .insert(8)
//     .insert(9)
//     .insert(10);

// let currentNode = myLL;

// while (currentNode.next) { currentNode = currentNode.next; }

// while (currentNode) {
//   console.log(currentNode.value);
//   currentNode = currentNode.prev;
// }