function removeHTML(str) {
  let start = str.indexOf('<');
  
  while (start >= 0) {
    const end = str.indexOf('>');
    str = str.slice(0, start) + str.slice(end + 1);
    start = str.indexOf('<');
  }

  str = str.replace(/&gt;/gi, '>');

  console.log(str);
}

removeHTML(`

<div class="myClass">
  <p>Hello World!</p>
</div>

`);