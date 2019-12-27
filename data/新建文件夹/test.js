const fs = require('fs');

fs.readFile('./mainbanner.json','utf8',function(err,data){
    if(!err){


        console.log(JSON.parse(data));
        
    }
})