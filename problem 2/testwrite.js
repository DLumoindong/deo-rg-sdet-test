var fs = require('fs')
fs.writeFile('mynewfile3.txt', "response.body", function (err) {
    if (err) throw err;
    console.log('Saved!');
    });