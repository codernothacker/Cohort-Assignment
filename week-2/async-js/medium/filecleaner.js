const fs =require('fs');

fs.readFile('week-2/async-js/easy/a.txt','utf8',function(err,data){
    let w=data.replace(/\s/g, '');
    fs.writeFile('week-2/async-js/easy/a.txt', w, function (err) {
        if (err) throw err;
        console.log('Replaced!');
      })
      
        
})