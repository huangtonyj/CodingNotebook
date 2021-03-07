/*
  Write a function that takes in a positive integer
  numberOfTags and returns a list of all the valid strings that you
  can generate with that number of matched <div></div> tags.

  A string is valid and contains matched
  <div></div> tags if for every opening tag
  <div>, there is a closing tag </div>
  that comes after the opening tag and that isn't used as a closing tag for
  another opening tag. Each output string should contain exactly
  numberOfTags opening tags and numberOfTags closing tags.

  For example, given numberOfTags = 2, the valid strings to return
  would be:
    ["<div></div><div></div>",
     "<div><div></div></div>"].

  Note that the output strings don't need to be in any particular order.

  Sample Input
    numberOfTags = 3

  Sample Output
    [
      "<div><div><div></div></div></div>",
      "<div><div></div><div></div></div>",
      "<div><div></div></div><div></div>",
      "<div></div><div><div></div></div>",
      "<div></div><div></div><div></div>",
    ] // The strings could be ordered differently.
*/

function generateDivTags(numberOfTags) {
  const start = {
    val: '<div>',
    openCount: 1,
    closeCount: 0
  };

  let queue = [start];
  let next = [];
  
  for (let i = 1; i < numberOfTags * 2; i++) {
    while (queue.length) {
      const {val, openCount, closeCount} = queue.shift();

      if (openCount < numberOfTags) {
        next.push({
          val: val + '<div>',
          openCount: openCount + 1,
          closeCount: closeCount
        });
      }
      
      if (openCount > closeCount) {
        next.push({
          val: val + '</div>',
          openCount: openCount,
          closeCount: closeCount + 1
        });
      }

    }

    queue = next;
    next = [];
  }

  return queue.map(obj => obj.val);
}

module.exports = generateDivTags;