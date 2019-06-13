'use strict'
const fs = require('fs');
let eventHub = require('./event')
let writeFunc = require('./writeFile');
let fileHasBeenRead ='';
  let readFile = (file) => {
     fs.readFile( file, (err, data) => {
      if(err) { throw err; }
       fileHasBeenRead = data.toString().toUpperCase().buffer;
       writeFunc(fileHasBeenRead.buffer);
    });
}
eventHub.on('read', readFile);
//node readFile.js text.txt
const file = process.argv.slice(2).shift();
eventHub.emit('read', file)

module.exports = fileHasBeenRead;;