const fs =require('fs');

fs.readFile('./async-js/easy/a.txt','utf8',function(err,data){
        console.log(data)
        console.log(err)
})
let a=0;
for(i=0;i<10000000;i++){
        
        a+=i;
        
}
function fn(num,fac){
        let facNum=num**fac;
        return facNum;
}
function cal(c,d,fac,fn){
        let calC=fn(c,fac);
        let calD=fn(d,fac);
        return calC+calD;

}
console.log(a)
console.log(cal(2,3,2,fn))
