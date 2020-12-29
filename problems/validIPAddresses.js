/*  
  You're given a string of length 12 or smaller, containing only digits. Write a
  function that returns all the possible IP addresses that can be created by
  inserting three .s in the string.

  An IP address is a sequence of four positive integers that are separated by
  .s, where each individual integer is within the range
  0 - 255, inclusive.

  An IP address isn't valid if any of the individual integers contains leading
  0s. For example, "192.168.0.1" is a valid IP
  address, but "192.168.00.1" and
  "192.168.0.01" aren't, because they contain "00" and
  01, respectively. Another example of a valid IP address is
  "99.1.1.10"; conversely, "991.1.1.0" isn't valid,
  because "991" is greater than 255.

  Your function should return the IP addresses in string format and in no
  particular order. If no valid IP addresses can be created from the string,
  your function should return an empty list.

  validIPAddresses
    Note: check out our Systems Design Fundamentals on SystemsExpert to learn more
    about IP addresses!

  Sample Input
    string = "1921680"

  Sample Output
    [
      "1.9.216.80",
      "1.92.16.80",
      "1.92.168.0",
      "19.2.16.80",
      "19.2.168.0",
      "19.21.6.80",
      "19.21.68.0",
      "19.216.8.0",
      "192.1.6.80",
      "192.1.68.0",
      "192.16.8.0"
    ]
*/

function validIPAddresses(str) {
  const validAddresses = [];
  const queue = [{
    string: str,
    dotCount: 0,
    lastDotPos: 0
  }];

  while (queue.length) {
    const {string, dotCount, lastDotPos} = queue.shift();

    if (dotCount < 3) {
      for (let i = 1; i <= 3; i++) {
        const next = string.slice(lastDotPos, lastDotPos + i);

        if (next <= 255 && next !== '00') {
          queue.push({
            string: string.slice(0, lastDotPos + i) + '.' + string.slice(lastDotPos + i),
            dotCount: dotCount + 1,
            lastDotPos: lastDotPos + i + 1
          });
        }
      }
    } else {
      const endOfStr = string.slice(lastDotPos);

      if (endOfStr <= 255 && endOfStr !== '00' && endOfStr !== '') validAddresses.push(string);
    }
  }

  return validAddresses;
}

module.exports = validIPAddresses;