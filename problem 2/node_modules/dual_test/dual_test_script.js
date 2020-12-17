//Dependencies:

const fs = require('fs'); //used to handle file operations
const chai = require('chai'); //assertion library
const chaiHttp = require('chai-http'); //http client library
const { assert } = require('console');
const { Test } = require('mocha');
chai.use(chaiHttp); //initialize chai library to use the chai http library

//Main Function
function dualTest(inp1, inp2){
    array1=fs.readFileSync(inp1, 'utf8').split('\r\n'); //read the first input file to determine first array of API addresses
    array2=fs.readFileSync(inp2, 'utf8').split('\r\n'); //read the second input file to determine second array of API addresses

    var res; //short for result. A boolean variable which determines if the responses are equal or not equal

    //Response comparator function
    function comparator(req1, req2){
        
        let rb1; //variable to store first response body
        let rb2; //variable to store second response body
        
        fs.writeFile('report.txt', "", {'flags': 'a+'}, function (err) { //ensure that the report.txt file is empty
            if (err) throw err;
        });
        
        it("Test 1 Passed", (done)=>{
            chai.request("")
                .get(req1) //GET API from first input
                .end ((err, response) => {
                rb1=response.body //store response body from current line of second array to a variable
                done();
                return rb1
            })
            return rb1
        })
        
        it("Test 2 Passed", (done)=>{
            chai.request("")
                .get(req2) //GET API from second input
                .end ((err, response) => {
                rb2=response.body //store response body from current line of second array to a variable
                done();
                
                //Comparison process

                res=(JSON.stringify(rb1)==JSON.stringify(rb2)) //comparison of both responses is stored in this 'res' variable

                if(res){ //if responses are equal
                    str=String(req1)+ " equals " + String(req2)
                    strf=str+'\r\n'
                    console.log(strf)
                    fs.appendFile('report.txt', strf, {'flags': 'a+'}, function (err) { //print to report.txt file
                        if (err) throw err;
                    });
                }
                else{ //if responses are not equal
                    str=String(req1)+ " not equal "+ String(req2)
                    strf=str+'\r\n'
                    console.log(strf)
                    fs.appendFile('report.txt', strf, {'flags': 'a+'}, function (err) { //print to report.txt file
                        if (err) throw err;
                    });
                }
            })
        })
    }

    len=array1.length //determine the number of iterations. The length of array is stored in this variable to prevent splicing which may cause the loop to stop midway

    //FOR loop to execute all commans sequentially (line per line)
    for (j=0;j<len;j++){
        comparator(array1[j], array2[j]) //take inputs from both input arrays
    }
}
module.exports.dualTest = dualTest