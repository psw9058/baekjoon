const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

while (input > 0) {
  theNumberAtTheEnd++;

  if (theNumberAtTheEnd.toString().includes('666')) {
    input--;
  }
}

console.log(theNumberAtTheEnd);