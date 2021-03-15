//server.js
const zlib = require('zlib'); //zlib module accepts only strings or buffers.
const{ createGzip }  = require('zlib');
const { pipeline } = require('stream');
const {
    createReadStream,
    createWriteStream,
} = require('fs');

const gzip = createGzip();
const source = createReadStream('./nivell1/n1-ex3.js');
const destination = createWriteStream('nivell2.js.gzip');

pipeline(source, gzip, destination, (err) =>{
    if (err){
        console.log('An error ocurred:', err);
        process.exiteCode = 1;
    }
});
