const fs = require('fs');
//const chai = require('chai');

function compare_result(f1, f2, r1, r2){
    var rarray1 = [];
    var rarray2 = [];
    var array1 = [];
    var array2 = [];
    rarray1=fs.readFileSync(r1, 'utf8').split('\n');
    rarray2=fs.readFileSync(r2, 'utf8').split('\n');
    array1=fs.readFileSync(f1, 'utf8').split('\r\n');
    array2=fs.readFileSync(f2, 'utf8').split('\r\n');
    len = rarray1.length
    for (i=0;i<len;i++){
        let ax = (rarray1[i] == rarray2[i])
        if(ax){
            console.log(JSON.stringify(array1[i])+' equals '+ JSON.stringify(array2[i]))
        }
        else{
            console.log(JSON.stringify(array1[i])+' not equals '+ JSON.stringify(array2[i]))
        }
    }
}

compare_result('File1.txt','File2.txt','Response1.txt', 'Response2.txt')

