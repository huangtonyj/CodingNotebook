class NodeLL {
  constructor(value) {
    this.value = value;
    this.next = null;

    return this;
  }

  insert(value) {
    this.next = new NodeLL(value);
    return this.next;
  }
}

module.exports = NodeLL;

// Test for insert chaining method
// const myLL = new NodeLL(1);
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
// while (currentNode) {
//   console.log(currentNode.value);
//   currentNode = currentNode.next;
// }