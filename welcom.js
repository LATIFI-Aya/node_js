const fs = require('fs');

fs.writeFileSync('welcome.txt', 'Hello Node');
console.log('File "welcome.txt" created & data written');

fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  console.log('File contents:', data);
});
