// We have some historical clickstream data gathered from our site anonymously using cookies. The histories contain URLs that users have visited in chronological order.
// Write a function that takes two users' browsing histories as input and returns the longest contiguous sequence of URLs that appear in both.
// For example, given the following two users' histories:

const user1 = ['/home', '/register', '/login', '/user', '/one', '/two'];
const user2 = ['/home', '/red', '/login', '/user', '/one', '/pink'];

// You should return the following:
const expected = ['/login', '/user', '/one'];

const LinkListHash = require('../dataStructures/LinkListHash');

function longestContiguousSequence (str1, str2) {
  let result = [];
  let current = [];
  const linkListHash1 = new LinkListHash();
  // const linkListHash1 = new LinkListHash(str1);

  str1.forEach((el) => {
    linkListHash1.set(el, el);
  });

  str2.forEach((el, idx) => {
    // if (linkListHash1.get(el) && previousNodeIsSame) {


    const elNode1 = linkListHash1.getNode(el);
    current.push(el);
    if (elNode1 && elNode1.prev && elNode1.next.value.val === str2[idx + 1]) {
      // console.log('yes', el, elNode1);
      // current.push(el);
      
    } else {
      result = (current.length > result.length) ? current : result;
      current = [];
    }
  });

  return result;
}

console.log(longestContiguousSequence(user1, user2));