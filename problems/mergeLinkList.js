function mergeLinkList (head1, head2) {
  let current = head1.value < head2.value ? head1 : head2;
  let ans = current;

  let current1 = current === head1 ? head1.next : head1;
  let current2 = current === head2 ? head2.next : head2;

	while (current1 && current2) {
    if (current1.value < current2.value) {
	    current.next = current1;
      current1 = current1.next;
	  } else {
      current.next = current2;
	    current2 = current2.next;
	  }
    current = current.next;
	}

  const rest = current1 ? current1 : current2;
  current.next = rest;

	return ans;
}

module.exports = mergeLinkList;