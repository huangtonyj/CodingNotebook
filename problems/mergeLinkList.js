function mergeLinkList (list1, list2) {
  if (!list1 || !list2) return list1 || list2 || null;
  let current;
  
  if (list1.value < list2.value) {
    current = list1;
    list1 = list1.next;
  } else {
    current = list2;
    list2 = list2.next;
  }

  const head = current;

	while (list1 && list2) {
    if (list1.value < list2.value) {
	    current.next = list1;
      list1 = list1.next;
	  } else {
      current.next = list2;
	    list2 = list2.next;
	  }
    current = current.next;
	}

  const rest = list1 ? list1 : list2;
  current.next = rest;

	return head;
}

module.exports = mergeLinkList;