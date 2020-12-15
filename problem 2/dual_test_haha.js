const fs = require('fs'); //used to handle file operations
const chai = require('chai'); //assertion library
const assert = require('chai').assert;
const chaiHttp = require('chai-http'); //http client library
chai.use(chaiHttp); //initialize chai library to use the chai http library


//Base function which take two files (f1 and f2) as input
//arrays created to store the data from files
var array1 = [];
var array2 = [];

//result array
var rb1=[];
var rb2=[];

//read the file for data
array1=fs.readFileSync('File1.txt', 'utf8').split('\r\n');
array2=fs.readFileSync('File2.txt', 'utf8').split('\r\n');

it("Test 1 Passed", (done)=>{
    chai.request("").get(array1[0], function(err,resp,body){
        rb1.push(body);
        fs.appendFile('resp1.txt', rb1, {'flags': 'a+'}, function (err) {
            if (err) throw err;
            console.log('1 Saved!');
        });
        return rb1;
    })
    done();
    return rb1;
})
it("Test 2 Passed", (done)=>{
    chai.request("").get(array1[0], function(err,resp,body){
        rb2.push(body);
        return rb2;
    })
    done();
    return rb2
})
assert.deepEqual(rb1, rb2, 'not equal')
