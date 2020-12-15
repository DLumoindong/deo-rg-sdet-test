const fs = require('fs'); //used to handle file operations
const chai = require('chai'); //assertion library
const assert = require('chai').assert;
const chaiHttp = require('chai-http'); //http client library
chai.use(chaiHttp); //initialize chai library to use the chai http library


//Base function which take two files (f1 and f2) as input

function dual_test(f1,f2){
    //arrays created to store the data from files
    var array1 = [];
    var array2 = [];

    //result array
    var rb1;
    var rb2;

    //read the file for data
    array1=fs.readFileSync(f1, 'utf8').split('\r\n');
    array2=fs.readFileSync(f2, 'utf8').split('\r\n');

    //main test function
    function TestArray(req1, req2) {
        it("Test Passed", async()=>{
            rb1 = await chai.request("").get(req1);
        })
        it("Test Passed", async()=>{
            rb2 = await chai.request("").get(req2);
        })
        assert.deepEqual(rb1, rb2, 'not equal')
    }

    len1=array1.length; //variable assigned here to prevent splicing (loop stopped midway)

    //'for' loop for file 1
    for (let i=0;i<2;i++){
        TestArray(array1[i], array2[i])
    }
}

//calling the function
dual_test('File1.txt', 'File2.txt')