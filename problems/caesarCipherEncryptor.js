function caesarCipherEncryptor(str, key) {
  const alphabetIdx = (char) => { return char.charCodeAt() - 97; };
  const shiftKey = (num) => { return (num + key) % 26; };
  const encode = (num) => { return String.fromCharCode(num + 97); };
  
  return Array.from(str)
    .map((char) => alphabetIdx(char))
    .map((num) => shiftKey(num))
    .map((num) => encode(num))
    .join("");
}

module.exports = caesarCipherEncryptor;

// console.log(caesarCipherEncryptor("abcxyz", 0));
// console.log(caesarCipherEncryptor("abcxyz", 1));