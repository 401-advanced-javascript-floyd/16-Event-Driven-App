'use strict'
const fs = require('fs');
let eventHub = require('./event.js');
let readFile = require('./readFile');
console.log('line 5 ',readFile)

let writeFiles = (file) => {
  //console.log('from readFile', file)
  fs.writeFile( file, Buffer.from(readFile), (err, data) => {
    if(err) { throw err; }
    console.log(`${file} saved`);
  });
}

eventHub.on('writeFiles', writeFiles);
eventHub.emit('writeFiles', './text.txt')
module.exports = writeFiles;