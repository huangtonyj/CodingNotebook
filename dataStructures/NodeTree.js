class NodeTree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    this.children.push(new NodeTree(value));
    return this;
  }

  breadthFirstSearch() {
    const result = [];
    let queue = [this];

    while (queue.length) {
      const currentNode = queue.shift();
      result.push(currentNode.value);
      queue = queue.concat(currentNode.children);
    }

    return result;
  }
  
}

module.exports = NodeTree;