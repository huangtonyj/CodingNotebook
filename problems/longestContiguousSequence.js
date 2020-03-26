// We have some historical clickstream data gathered from our site anonymously using cookies. The histories contain URLs that users have visited in chronological order.
// Write a function that takes two users' browsing histories as input and returns the longest contiguous sequence of URLs that appear in both.
// For example, given the following two users' histories:

// const user1 = ['/home', '/register', '/login', '/user', '/one', '/two'];
// const user2 = ['/home', '/red', '/login', '/user', '/one', '/pink'];

// You should return the following:
// const expected = ['/login', '/user', '/one'];

const LinkListHash = require('../dataStructures/LinkListHash');

function longestContiguousSequence (str1, str2) {
  let result = [];
  let current = [];
  const linkListHash1 = new LinkListHash(str1);

  str2.forEach((el, idx) => {
    const elNode1 = linkListHash1.getNode(el);
    const nextEl1 = elNode1 ? elNode1.next.value.val : null;
    const nextEl2 = str2[idx + 1];

    current.push(el);
    
    if (nextEl1 !== nextEl2) {
      if (current.length > result.length) result = current;
      current = [];
    }
  });

  return result;
}

module.exports = longestContiguousSequence;