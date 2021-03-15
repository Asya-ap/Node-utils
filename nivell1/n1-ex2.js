const fs = require('fs');

fs.writeFile('./newFile.txt', 'Anastasia', () => { 
console.log('file has been created');
});