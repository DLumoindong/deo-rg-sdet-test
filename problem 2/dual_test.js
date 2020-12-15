const fs = require('fs'); //used to handle file operations
const chai = require('chai'); //assertion library
const chaiHttp = require('chai-http'); //http client library
const { assert } = require('console');
chai.use(chaiHttp); //initialize chai library to use the chai http library

//Base function which take two files (f1 and f2) as input

function dual_test(f1,rf){
    //arrays created to store the data from files
    var array1 = [];

    //read the file for data
    array1=fs.readFileSync(f1, 'utf8').split('\r\n');

    //delete the existing response file
    fs.unlink(rf, function (err) {
        if (err) throw err;
        console.log('Output File Cleared');
    });

    fs.writeFile(rf, "", function (err) {
        if (err) throw err;
        console.log('Output File Cleared');
    });


    //main test function
    function TestArray(req) {
        it("Test Passed", (done)=>{
            chai.request("")
                .get(req)
                .end ((err, response) => {
                done();

                //store the response body in rb variable and add a new line
                rb = JSON.stringify(response.body)
                rb = rb + "\n"

                //write the response to file
                fs.appendFile(rf, rb, {'flags': 'a+'}, function (err) {
                    if (err) throw err;
                });
                console.log('Response of ' + req  +' Written to file');
                })
        })
    }

    len1=array1.length; //variable assigned here to prevent splicing (loop stopped midway)

    //'for' loop for file 1
    for (let i=0;i<len1;i++){
        TestArray(array1[i])
    }
}
dual_test('File1.txt','Response1.txt')
dual_test('File2.txt','Response2.txt')