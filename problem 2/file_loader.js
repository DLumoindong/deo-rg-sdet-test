const fs = require('fs');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

var array1 = []; 
var array2 = [];

array1=fs.readFileSync('File1.txt', 'utf8').split('\r\n');
array2=fs.readFileSync('File2.txt', 'utf8').split('\r\n');

fs.unlink('Response1.txt', function (err) {
    if (err) throw err;
    console.log('Output File Cleared');
  });

function TestArray(i) {
    it("Test Passed", (done)=>{
        chai.request("")
            .get(i)
            .end ((err, response) => {
                //response.statusCode.should.equal(200);
                //response.body.should.be.a('array');
            done();
            m = JSON.stringify(response.body)
            m = m + "\n"
            fs.appendFile('Response1.txt', m, {'flags': 'a+'}, function (err) {
                if (err) throw err;
                console.log('Response Written');
                });
            })
    })
}
len=array1.length;
for (let i=0;i<len;i++){
    TestArray(array1[i])
}