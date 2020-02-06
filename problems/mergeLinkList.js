// const nodeLL = require('../dataStructures/nodeLL');

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  addMany(values) {
    let current = this;
    while (current.next !== null) {
      current = current.next;
    }
    for (const value of values) {
      current.next = new LinkedList(value);
      current = current.next;
    }
    return this;
  }

  getNodesInArray() {
    const nodes = [];
    let current = this;
    while (current !== null) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes;
  }
}

function mergeLinkList (head1, head2) {

	let current1 = head1;
	let current2 = head2;

	let ans = new LinkedList(null);
	let current = ans;

	while (current1 || current2) {
    // console.log(current);

    if (!current1) {
      current.next = current2;
      current2 = current2.next;
    } else if (!current2) {
      current.next = current1;
      current1 = current1.next;
    } else if (current1.value < current2.value) {
	    current.next = current1;
      current1 = current1.next;
	  } else {
      current.next = current2;
	    current2 = current2.next;
	  }
    current = current.next;
	}

  console.log('ans: ', ans.next);

	return ans.next;

}

// const linkList1 = new nodeLL(2);
//   linkList1.insert(6).insert(7).insert(8);
  
// const linkList2 = new nodeLL(1);
//   linkList2.insert(3).insert(4).insert(5).insert(9);

// console.log(mergeLinkList(linkList1, linkList2));

module.exports = mergeLinkList;