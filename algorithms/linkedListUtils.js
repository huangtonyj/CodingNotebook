class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;

    return this;
  }

  insert(value) {
    this.next = new LinkedList(value);
    
    return this.next;
  }
}

function arrayToLinkedList(arr) {
  const head = new LinkedList(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    const value = arr[i];
    current = current.insert(value);
  }

  return head;
}

function linkedListToArr(head) {
  const res = [];
  let current = head;

  while (current) {
    res.push(current.value);
    current = current.next;
  }

  return res;
}

function printLinkedList(head) {
  let current = head;

  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

module.exports = {
  arrayToLinkedList,
  linkedListToArr,
  printLinkedList
};